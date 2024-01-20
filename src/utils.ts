import {send_receive} from '@wasm-lib/flowy_wasm';

export async function test_sync() {
  console.log('handleAdd');
  const result = await send_receive();
  return result;
}