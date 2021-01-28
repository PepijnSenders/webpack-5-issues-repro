import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp551483 = dynamic(() => import(/* webpackChunkName: "TestComp551483" */ './TestComp551483'));
const TestComp58813 = dynamic(() => import(/* webpackChunkName: "TestComp58813" */ './TestComp58813'));

const TestComp814827: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp551483 />
<TestComp58813 />
    </>
  );
};

export default TestComp814827;
