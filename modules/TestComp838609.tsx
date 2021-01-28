import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp563287 = dynamic(() => import(/* webpackChunkName: "TestComp563287" */ './TestComp563287'));
const TestComp624835 = dynamic(() => import(/* webpackChunkName: "TestComp624835" */ './TestComp624835'));

const TestComp838609: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp563287 />
<TestComp624835 />
    </>
  );
};

export default TestComp838609;
