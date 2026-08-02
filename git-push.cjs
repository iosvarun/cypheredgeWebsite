const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const readline = require('readline');

const dir = '/Users/juhisingh/Documents/LiveApps/Cypheredge_Website';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('==================================================');
  console.log('  CypherEdge Pure-Node GitHub Pusher (No Xcode)');
  console.log('==================================================\n');

  const username = process.argv[2] || await ask('Enter GitHub Username (e.g., iosvarun): ');
  const token = process.argv[3] || await ask('Enter GitHub Personal Access Token (or password): ');

  rl.close();

  if (!username || !token) {
    console.error('Username and token are required.');
    process.exit(1);
  }

  console.log('\nPushing main branch to https://github.com/iosvarun/cypheredgeWebsite.git ...');

  try {
    const pushResult = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      force: true,
      onAuth: () => ({ username: username.trim(), password: token.trim() }),
    });

    console.log('\n🎉 SUCCESS! All changes pushed to GitHub successfully!');
    console.log(pushResult);
  } catch (err) {
    console.error('\n❌ Push failed:', err.message || err);
  }
}

main();
