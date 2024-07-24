document.getElementById("fill-inputs").addEventListener("click", () => {
  const textValue = document.getElementById("input-value").value;
  const numberValue = document.getElementById("input-number-value").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: fillInputs,
      args: [textValue, numberValue],
    });
  });
});

function fillInputs(textValue, numberValue) {
  const textInputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"], textarea'
  );
  const numberInputs = document.querySelectorAll('input[type="number"]');

  textInputs.forEach((input) => (input.value = textValue));
  numberInputs.forEach((input) => (input.value = numberValue));
}
