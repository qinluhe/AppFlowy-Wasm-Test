
use tokio::sync::mpsc;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::spawn_local;

#[wasm_bindgen]
pub async fn send_receive() -> String {
    let (tx, mut rx) = mpsc::channel(32);

    spawn_local(async move {
        tx.send("hello".to_string()).await.unwrap();
    });

    if let Some(message) = rx.recv().await {
        message
    } else if let None = rx.recv().await {
        "no message".to_string()
    } else {
        unreachable!()
    }
}

