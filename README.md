

### `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

### `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
Builds the app for production to the `build` folder.\

The build is minified and the filenames include the hashes.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


1. 项目运行命令：yarn start
### 我们都知道 create-react-app 是将 webpack 配置文件隐藏起来的，但在项目过程中，我们需要修改配置文件，这里提供两个方法
1. 通过 eject 命令释放 webpack 文件
react-scripts 是 create-react-app 的一个核心包，一些脚本和工具的默认配置都集成在里面，而 yarn eject 命令执行后会将封装在 create-react-app 中的配置全部反编译到当前项目，这样用户就能完全取得 webpack 文件的控制权。所以，eject 命令存在的意义就是更改 webpack 配置，通过 eject 方法释放的配置文件这个操作是不可逆的，要谨慎
```js
npm run eject
```
2. react-app-rewired
  2.1 安装react-app-rewired
  ```js
  npm install react-app-rewired --save-dec
  ```
  2.2 在 package.json 中，将原本的 react-script 改为 react-app-rewired
  ```js
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  }
  ```
  在根目录下新建config-overrides.js,在config-overrides.js里更改配置项，项目启动的时候会先在config-overrides.js里读数据，对webpack里的默认文件进行整合，最后才会启动。

  要对 webpack 配置，还需要安装 customize-cra 包

  ```js
npm install customize-cra --save-dev
  ```

  customize-cra 利用 react-app-rewired 和 config-overrides.js 文件。通过导入customize-cra 函数并导出包装在我们的 override 函数中的一些函数调用，您可以轻松地修改构成 create-react-app 的基础配置对象（webpack，webpack-dev-server，babel等）。

