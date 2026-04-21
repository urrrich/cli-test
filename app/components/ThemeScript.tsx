export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.dataset.theme='dark';}else{document.documentElement.dataset.theme='light';}}catch(e){document.documentElement.dataset.theme='light';}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
