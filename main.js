// Starter Projects :)

const { readFileSync, mkdirSync, writeFileSync } = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

function main() {
    const todoContent = readFileSync(path.join(__dirname, "./TODO.txt"), "utf-8")
    const todos = todoContent.split('\r\n').filter(v => v)
    for (const todo of todos) {
        const [projectName, description] = todo.split(":")
        const projectPath = path.join(__dirname, `./${projectName.split(' ').join('-')}`)
        mkdirSync(`${projectPath}/src`, { "recursive": true })
        writeFileSync(path.join(`${projectPath}/src`, 'main.ts'), "")
        writeFileSync(path.join(projectPath, 'README.md'), description)
        spawnSync('npm init -y', { "shell": "powershell", "cwd": projectPath })
        spawnSync('npx tsc --init', { "shell": "powershell", "cwd": projectPath })
        console.log(`✅ ${projectName}`);
    }
}

main()