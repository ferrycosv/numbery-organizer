if (window.location.origin.indexOf('.github.io') !== -1) {
  window.onload = () => {
    const userName = window.location.href.split('/')[2].split('.')[0];
    const repoName = window.location.href.split('/')[3];
    const viewSource = document.createElement('button');
    viewSource.innerHTML = 'view source';
    viewSource.onclick = () => window.open('https://github.com/' + userName + '/' + repoName + '/tree/master/object.js', '_blank');
    document.getElementById('dynamic-buttons').appendChild(viewSource);
  }
}
