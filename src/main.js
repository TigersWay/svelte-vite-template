import './main.css';
import App from './App.svelte';
import { name, version } from '../package.json';
const app = new App({
    target: document.body,
    props: { name, version }
});
export default app;
