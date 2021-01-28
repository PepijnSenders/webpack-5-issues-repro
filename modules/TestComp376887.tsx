import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp112776 = dynamic(() => import(/* webpackChunkName: "TestComp112776" */ './TestComp112776'));
const TestComp140521 = dynamic(() => import(/* webpackChunkName: "TestComp140521" */ './TestComp140521'));

const TestComp376887: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp112776 />
<TestComp140521 />
    </>
  );
};

export default TestComp376887;
