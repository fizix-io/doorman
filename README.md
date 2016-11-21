# doorman

## Installation

```shell
git clone git@github.com:fizix-io/doorman.git
cd doorman
pushd server && yarn install && popd
sudo npm i -g forever
```

## Start script on boot

```shell
sudo crontab -e
```

Add this line

```crontab
@reboot /usr/local/bin/forever start -c /usr/local/bin/node /home/pi/doorman/server/index.js
```
