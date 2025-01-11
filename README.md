# Official Repository for the Website of the PlexTech Organization

### Website Developer Instructions for First Timers
1. Generate your public key
```
cd ~/.ssh
ssh-keygen -o
cat ~/.ssh/id_rsa.pub
```
2. Copy and paste the output from the last step
3. Setting => SSH and GPG keys => New SSH Key
4. Add any name and the public key you just copied


### Instructions for Updating and Deploying the Website
```
git add .
git commit -m "<commit message>"
git push origin master
ssh plextech@apphost.ocf.berkeley.edu
cd app/plex-web
deploy
```

`deploy` is an alias for `git pull origin master && systemctl --user restart app`. You can always run these commands separately if needed.

Consult a member of the executive team to obtain the password to ssh into plextech@apphost.ocf.berkeley.edu