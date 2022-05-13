import React from 'react';
import { Content } from './styles';

export default function Header() {
  return (
    <Content className="flex gap-5 items-center justify-center">
      <span className='text-white text-4xl p-2'>Send File</span>
    </Content>
  );
}
