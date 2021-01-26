class Module {
  constructor(name, dependencies = []) {
    this.name = name;
    this.dependencies = dependencies;
  }
}

const getRandomSuffix = () =>
  `${Math.round(Math.random() * 1000)}${Math.round(Math.random() * 1000)}`;

let rcCount = 0;
const generateRandomModuleTree = () => {
  rcCount++;

  if (rcCount > 100000) {
    return [];
  }

  const dependencyCount = Math.round(Math.random());

  const dependencies = [];
  for (let i = 0; i < dependencyCount * 2; i++) {
    dependencies.push(generateRandomModuleTree());
  }

  const randomModule = new Module(`TestComp${getRandomSuffix()}`, dependencies);

  return randomModule;
};

const main = async () => {
  const moduleTree = generateRandomModuleTree();

  console.log(JSON.stringify(moduleTree));
};

main();
