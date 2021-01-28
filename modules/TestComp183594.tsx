import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp54074 = dynamic(() => import(/* webpackChunkName: "TestComp54074" */ './TestComp54074'));
const TestComp597364 = dynamic(() => import(/* webpackChunkName: "TestComp597364" */ './TestComp597364'));

const TestComp183594: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp54074 />
<TestComp597364 />
    </>
  );
};

export default TestComp183594;
