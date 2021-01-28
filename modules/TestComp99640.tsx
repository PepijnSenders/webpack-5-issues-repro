import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TestComp49497 = dynamic(() => import(/* webpackChunkName: "TestComp49497" */ './TestComp49497'));
const TestComp827224 = dynamic(() => import(/* webpackChunkName: "TestComp827224" */ './TestComp827224'));

const TestComp99640: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    console.log('click');
  }, [click]);

  return (
    <>
      <div onClick={() => setClick(true)}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>;
      <TestComp49497 />
<TestComp827224 />
    </>
  );
};

export default TestComp99640;
