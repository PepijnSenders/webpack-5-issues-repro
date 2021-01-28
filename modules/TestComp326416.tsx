import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp35818 = dynamic(() => import(/* webpackChunkName: "TestComp35818" */ './TestComp35818'));
const TestComp67177 = dynamic(() => import(/* webpackChunkName: "TestComp67177" */ './TestComp67177'));

const TestComp326416: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp35818 />
<TestComp67177 />
    </>
  );
};

export default TestComp326416;
