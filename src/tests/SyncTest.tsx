import {
  Card,
  Button, Blockquote
} from '@radix-ui/themes';
import {
  send_receive
} from '@wasm-lib/flowy_wasm';
import {useState} from "react";

function SyncTest() {
  const [text, setText] = useState('');
  return (
    <div>
      <Card style={{ minWidth: 240 }}>
        <Button className={'sync-btn'} onClick={async () => {
          const response = await send_receive();
          setText(response);
        }}>
          Click Me
        </Button>
        <Blockquote className={'sync-result'}>
          {text}
        </Blockquote>
      </Card>
    </div>
  );
}

export default SyncTest;