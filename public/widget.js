const widgetHost = document.createElement('div');
widgetHost.className = 'inTouchWidget';
widgetHost.innerHTML = `
  <style>
    .inTouchWidget {
      position: fixed;
      right: 22px;
      bottom: 22px;
      z-index: 1000;
      font-family: Inter, sans-serif;
    }
    .inTouchWidget .chatbox {
      width: 340px;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 18px;
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.16);
      background: white;
      overflow: hidden;
      color: #0f172a;
      margin-top: 12px;
    }
    .inTouchWidget .header {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: white;
      padding: 14px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
    }
    .inTouchWidget .body {
      padding: 14px 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      min-height: 170px;
    }
    .inTouchWidget .bubble {
      display: inline-block;
      max-width: 85%;
      padding: 10px 12px;
      border-radius: 12px;
      line-height: 1.4;
      font-size: 0.9rem;
    }
    .inTouchWidget .bubble.bot { background: #eef2ff; color: #1e293b; }
    .inTouchWidget .bubble.user { background: #4f46e5; color: white; align-self: flex-end; }
    .inTouchWidget .inputRow {
      display: flex;
      padding: 12px;
      border-top: 1px solid #e2e8f0;
      gap: 8px;
    }
    .inTouchWidget input {
      flex: 1;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 10px 12px;
      font: inherit;
    }
    .inTouchWidget button {
      border: none;
      background: #4f46e5;
      color: white;
      border-radius: 10px;
      padding: 10px 14px;
      font: inherit;
      cursor: pointer;
    }
    .inTouchWidget .launcher {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      color: white;
      border-radius: 999px;
      padding: 14px 18px;
      font-weight: 700;
      box-shadow: 0 18px 32px rgba(79, 70, 229, 0.25);
      cursor: pointer;
    }
  </style>
  <div class="chatbox">
    <div class="header">
      <span>AI Support</span>
      <small>Live</small>
    </div>
    <div class="body">
      <div class="bubble bot">Hi! Looking for a beauty appointment or a quick answer?</div>
      <div class="bubble bot">We can help you choose a service and answer FAQs in seconds.</div>
    </div>
    <div class="inputRow">
      <input type="text" value="I need a same-day appointment." />
      <button>Send</button>
    </div>
  </div>
  <div class="launcher">Chat now</div>
`;

document.body.appendChild(widgetHost);

const launcher = widgetHost.querySelector('.launcher');
const chatbox = widgetHost.querySelector('.chatbox');
chatbox.style.display = 'block';
launcher.addEventListener('click', () => {
  chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';
});
