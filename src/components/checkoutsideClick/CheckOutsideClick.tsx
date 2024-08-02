"use client"
import React, { useEffect, useRef } from 'react';

type Props = {
  onClickOutside: () => void;
  children: React.ReactNode;
};

const CheckOutsideClick = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { onClickOutside, children } = props;

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClickOutside && onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  if (!children) {
    return null;
  }
  return <div ref={ref}>{children}</div>;
};

export default CheckOutsideClick;