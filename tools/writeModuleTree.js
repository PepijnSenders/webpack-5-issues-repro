const { promises: fs } = require('fs');
const prettier = require('prettier');
const path = require('path');

const createComponentContents = (
  module
) => `import React, { useState, useEffect } from 'react';

${module.dependencies
  .map((dependency) => {
    return `import ${dependency.name} from './${dependency.name}';`;
  })
  .join('\n')}

const ${module.name}: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      ${(() => {
        let randomDivs = [];
        for (let i = 0; i < Math.ceil(Math.random() * 5); i++) {
          randomDivs.push(
            `<div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>`
          );
        }

        return randomDivs.join('\n');
      })()};
      ${module.dependencies
        .map((dependency) => {
          return `<${dependency.name} />`;
        })
        .join('\n')}
    </>
  );
};

export default ${module.name};
`;

const writeModuleTree = async (moduleTree) => {
  if (moduleTree.dependencies.length > 0) {
    for (let i = 0; i < moduleTree.dependencies.length; i++) {
      await writeModuleTree(moduleTree.dependencies[i]);
    }
  }

  await fs.writeFile(
    path.join(__dirname, '../modules', `${moduleTree.name}.tsx`),
    createComponentContents(moduleTree)
  );
};

const main = async () => {
  const root = path.resolve(__dirname, '..');

  const moduleTree = JSON.parse(
    (await fs.readFile(path.join(__dirname, 'tree.json'))).toString()
  );

  writeModuleTree(moduleTree);
};

main();
