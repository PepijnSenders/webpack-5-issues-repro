import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp711949 = dynamic(() => import(/* webpackChunkName: "TestComp711949" */ './TestComp711949'));
const TestComp824784 = dynamic(() => import(/* webpackChunkName: "TestComp824784" */ './TestComp824784'));

const TestComp289802: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp711949 />
<TestComp824784 />
    </>
  );
};

export default TestComp289802;
