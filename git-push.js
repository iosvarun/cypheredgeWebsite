import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node/index.js';
import fs from 'fs';
import readline from 'readline';

const dir = '/Users/juhisingh/Documents/LiveApps/Cypheredge_Website';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('--- CypherEdge GitHub Push (Pure Node.js) ---');
  
  const username = process.argv[2] || await ask('Enter GitHub Username (e.g. iosvarun): ');
  const token = process.argv[3] || await ask('Enter GitHub Personal Access Token (or password): ');
  
  rl.close();
  
  if (!username || !token) {
    console.error('Username and token are required.');
    process.exit(1);
  }

  console.log('\nPushing to https://github.com/iosvarun/cypheredgeWebsite.git ...');

  try {
    const pushResult = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      force: true,
      onAuth: () => ({ username, password: token }),
    });

    console.log('✅ PUSH SUCCESSFUL!');
    console.log(pushResult);
  } catch (err) {
    console.error('❌ Push failed:', err.message || err);
  }
}

main();
