class JekyllAuth
  class AuthSite < Sinatra::Base

    # require ssl
    configure :production do
      require 'rack-ssl-enforcer'
      use Rack::SslEnforcer if JekyllAuth.ssl?
    end

    use Rack::Session::Cookie, {
      :http_only => true,
      :secret => ENV['SESSION_SECRET'] || SecureRandom.hex
    }

    set :github_options, {
      :client_id     => ENV['GITHUB_CLIENT_ID'],
      :client_secret => ENV['GITHUB_CLIENT_SECRET'],
      :scopes        => 'read:org'
    }

    register Sinatra::Auth::Github

    before do
      pass if JekyllAuth.whitelist && JekyllAuth.whitelist.match(request.path_info)
      if ENV['GITHUB_TEAM_IDS']
        authenticate!
        ENV['GITHUB_TEAM_IDS'].split(",").each do |team|
          return pass if github_team_access?(team.strip)
        end
        halt 401
      elsif ENV['GITHUB_TEAM_ID']
        github_team_authenticate!(ENV['GITHUB_TEAM_ID'])
      elsif ENV['GITHUB_ORG_ID']
        github_organization_authenticate!(ENV['GITHUB_ORG_ID'])
      else
        puts "ERROR: Jekyll Auth is refusing to serve your site."
        puts "Looks like your oauth credentials are not properly configured. RTFM."
        halt 401
      end
    end

    get '/logout' do
      logout!
      redirect '/'
    end
  end
end
