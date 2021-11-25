# BurgerReactNative
BurgerReactNative is a project from https://www.udemy.com/course/reactnativefoodapp/learn/lecture/14962664#questions/8120945 and will store all the topic learned there and any change need to make it work.

In this project we are using 
- React Native
- React Native Elements
- Ignite
- Typescript
- NativeBase


# Run this project
Be sure you have installed chocolatey
Run this command in the PowerShell
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Then install the dependencies for React Native
```
choco install -y nodejs.install openjdk8
```

You may need to install Yarn
```
npm install --global yarn
```

then install ignite cli
```
yarn global add ignite-cli
```


Finally we can create the project 
```
npx ignite-cli new AppName
```
