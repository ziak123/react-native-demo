import * as React from 'react';
export function goBack() {
  navigationRef.current?.goBack();
}