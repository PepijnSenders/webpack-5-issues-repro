import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp40995 = dynamic(() => import(/* webpackChunkName: "TestComp40995" */ './TestComp40995'));
const TestComp20719 = dynamic(() => import(/* webpackChunkName: "TestComp20719" */ './TestComp20719'));

const TestComp996881: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp40995 />
<TestComp20719 />
    </>
  );
};

export default TestComp996881;
