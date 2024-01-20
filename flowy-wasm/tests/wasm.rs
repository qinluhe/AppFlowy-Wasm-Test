use wasm_bindgen_test::*;
use flowy_wasm::{add, send_receive};
wasm_bindgen_test_configure!(run_in_browser);


#[wasm_bindgen_test]
fn test_add() {
    assert_eq!(add(1, 2), 3);
}

#[wasm_bindgen_test]
async fn test_send_receive() {
    let message = send_receive().await;
    assert_eq!(message, "hello");
}