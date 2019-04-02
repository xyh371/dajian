import './common/css/reset.css'
import dva from 'dva';
import Router from './router/router.js'
import createHistory from 'history/createBrowserHistory';
import moduls from './models/global'
const app = dva({
  history: createHistory(),
});

app.model(moduls)
app.router(Router)

app.start('#root')

export default app;