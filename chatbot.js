// ── StrathMart Rule-Based Chatbot ──

const responses = {
    greetings: {
        keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'hii'],
        response: "👋 Hi there! I'm StrathBot, your StrathMart assistant! How can I help you today? You can ask me about products, orders, delivery, or anything StrathMart! 😊"
    },
    products: {
        keywords: ['product', 'products', 'sell', 'selling', 'buy', 'shop', 'item', 'items', 'what do you have', 'available'],
        response: "🛍️ StrathMart has 4 categories:\n\n💻 <b>Electronics</b> — Laptops, phones, accessories\n👕 <b>Merchandise</b> — Strathmore hoodies, caps, backpacks\n✏️ <b>Stationery</b> — Calculators, notebooks, pens\n🍽️ <b>Food</b> — Sandwiches, burgers, coffee, samosas\n\nVisit our <a href='products.html' style='color:var(--blue)'>Shop page</a> to browse all products!"
    },
    electronics: {
        keywords: ['electronics', 'laptop', 'phone', 'computer', 'mouse', 'airpods', 'hub', 'gadget'],
        response: "💻 Our Electronics include:\n\n• HP Laptop — KES 85,000\n• Samsung Galaxy A55 — KES 45,000\n• Apple AirPods Pro — KES 28,000\n• Logitech Wireless Mouse — KES 2,500\n• USB-C Hub 7-in-1 — KES 3,500\n\nCheck them out on our <a href='products.html?category=Electronics' style='color:var(--blue)'>Electronics page</a>!"
    },
    merchandise: {
        keywords: ['merchandise', 'merch', 'hoodie', 'tshirt', 't-shirt', 'cap', 'backpack', 'bottle', 'strathmore wear'],
        response: "👕 Our Strathmore Merchandise includes:\n\n• Strathmore Hoodie — KES 3,500\n• Strathmore T-Shirt — KES 1,500\n• Strathmore Cap — KES 1,200\n• Strathmore Backpack — KES 4,500\n• Strathmore Water Bottle — KES 800\n\nRep your university in style! 🎓 <a href='products.html?category=Merchandise' style='color:var(--blue)'>Shop Merchandise</a>"
    },
    stationery: {
        keywords: ['stationery', 'pen', 'notebook', 'calculator', 'geometry', 'highlighter', 'pencil', 'book'],
        response: "✏️ Our Stationery includes:\n\n• Scientific Calculator — KES 2,500\n• Lecture Notebook Set — KES 850\n• Geometry Set — KES 450\n• Ballpoint Pen Pack — KES 250\n• Highlighter Set — KES 350\n\n<a href='products.html?category=Stationery' style='color:var(--blue)'>Shop Stationery</a>"
    },
    food: {
        keywords: ['food', 'eat', 'hungry', 'cafeteria', 'sandwich', 'burger', 'coffee', 'samosa', 'fruit', 'meal', 'drink'],
        response: "🍽️ Our Food menu includes:\n\n• Chicken Sandwich — KES 350\n• Beef Burger — KES 450\n• Fresh Fruit Salad — KES 250\n• Cappuccino — KES 200\n• Vegetable Samosa Pack — KES 150\n\nFresh from the Strathmore cafeteria! 😋 <a href='products.html?category=Food' style='color:var(--blue)'>Order Food</a>"
    },
    order: {
        keywords: ['order', 'orders', 'how to order', 'place order', 'ordering', 'buy', 'purchase'],
        response: "📦 Here's how to order on StrathMart:\n\n1️⃣ <b>Register/Login</b> to your account\n2️⃣ Browse products and click <b>Add to Cart</b>\n3️⃣ Go to your <b>Cart</b> and review items\n4️⃣ Click <b>Place Order</b>\n5️⃣ Your order will be <b>pending</b> until confirmed\n\nIt's that easy! 🚀"
    },
    cart: {
        keywords: ['cart', 'basket', 'added', 'remove', 'add to cart'],
        response: "🛒 To manage your cart:\n\n• Click <b>Add to Cart</b> on any product\n• Go to the <a href='cart.html' style='color:var(--blue)'>Cart page</a> to view items\n• Remove items you don't want\n• Click <b>Place Order</b> when ready!\n\nYour cart is saved as long as you're logged in 😊"
    },
    delivery: {
        keywords: ['delivery', 'deliver', 'shipping', 'ship', 'how long', 'when', 'receive'],
        response: "🚚 StrathMart Delivery Info:\n\n✅ <b>FREE delivery</b> on campus\n📍 Delivered within <b>Strathmore University</b>\n⏰ Orders are processed during business hours\n💳 <b>Payment on delivery</b>\n\nWe'll notify you when your order is confirmed! 📱"
    },
    payment: {
        keywords: ['payment', 'pay', 'mpesa', 'cash', 'how to pay', 'price', 'cost'],
        response: "💳 Payment at StrathMart:\n\n• Payment is done <b>on delivery</b>\n• We accept <b>Cash</b> and <b>M-Pesa</b>\n• No online payment required\n• Prices are in <b>Kenya Shillings (KES)</b>\n\nShop now, pay when you receive! 🎉"
    },
    account: {
        keywords: ['account', 'register', 'login', 'sign up', 'sign in', 'password', 'forgot', 'create account'],
        response: "👤 Account Help:\n\n• <a href='register.html' style='color:var(--blue)'>Create an account</a> with your email\n• <a href='login.html' style='color:var(--blue)'>Login</a> with your email and password\n• You need an account to add to cart and order\n• Use your <b>Strathmore email</b> for verification\n\nNeed help? Contact us at strathmart@strathmore.edu 📧"
    },
    contact: {
        keywords: ['contact', 'support', 'help', 'problem', 'issue', 'email', 'reach', 'talk'],
        response: "📩 Contact StrathMart Support:\n\n📧 <b>Email:</b> strathmart@strathmore.edu\n📍 <b>Location:</b> Strathmore University, Nairobi\n⏰ <b>Hours:</b> Mon-Fri 8am-6pm, Sat 9am-1pm\n\nOr use our <a href='contact.html' style='color:var(--blue)'>Contact page</a> to send a message directly! 💬"
    },
    rating: {
        keywords: ['rate', 'rating', 'review', 'feedback', 'opinion', 'stars'],
        response: "⭐ We'd love your feedback!\n\nVisit our <a href='rate.html' style='color:var(--blue)'>Rate Us page</a> to:\n• Leave a star rating (1-5 stars)\n• Write a comment about your experience\n• See what other students are saying\n\nYour feedback helps us improve! 🙏"
    },
    thanks: {
        keywords: ['thank', 'thanks', 'thank you', 'asante', 'appreciate'],
        response: "😊 You're welcome! Happy shopping at StrathMart! 🛍️\n\nIf you need anything else, I'm always here to help! 🤖"
    },
    bye: {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'cya'],
        response: "👋 Goodbye! Happy shopping at StrathMart! Don't forget to check out our latest products! 🛍️✨"
    },
    about: {
        keywords: ['about', 'what is strathmart', 'strathmart', 'who are you', 'tell me about'],
        response: "🎓 <b>About StrathMart</b>\n\nStrathMart is <b>Strathmore University's official online marketplace</b> built exclusively for students!\n\n✅ Shop electronics, merch, stationery & food\n✅ Free campus delivery\n✅ Pay on delivery\n✅ Easy to use\n\nBuilt with ❤️ at Strathmore University, Nairobi 🇰🇪"
    }
};

const defaultResponse = "🤔 I'm not sure about that! Here's what I can help with:\n\n• 🛍️ <b>Products</b> — Ask about our categories\n• 📦 <b>Orders</b> — How to place an order\n• 🚚 <b>Delivery</b> — Delivery info\n• 💳 <b>Payment</b> — Payment options\n• 📩 <b>Contact</b> — Reach our support team\n\nTry asking one of those! 😊";

let isChatOpen = false;

function createChatWidget() {
    const widget = document.createElement('div');
    widget.className = 'chat-widget';
    widget.innerHTML = `
        <div class="chat-box" id="chatBox">
            <div class="chat-header">
                <div class="chat-avatar">🤖</div>
                <div class="chat-info">
                    <h4>StrathBot</h4>
                    <p>Your StrathMart Assistant</p>
                </div>
                <button class="chat-close" onclick="toggleChat()">✕</button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="chat-message bot">
                    <div class="avatar">🤖</div>
                    <div class="bubble">👋 Hi! I'm <b>StrathBot</b>, your StrathMart assistant! How can I help you today?</div>
                </div>
            </div>
            <div class="chat-suggestions">
                <button class="suggestion-btn" onclick="sendSuggestion('What products do you have?')">🛍️ Products</button>
                <button class="suggestion-btn" onclick="sendSuggestion('How do I place an order?')">📦 Orders</button>
                <button class="suggestion-btn" onclick="sendSuggestion('How do I contact support?')">📩 Support</button>
                <button class="suggestion-btn" onclick="sendSuggestion('What are the delivery options?')">🚚 Delivery</button>
            </div>
            <div class="chat-input-area">
                <input type="text" id="chatInput" placeholder="Ask me anything..." onkeypress="handleChatKey(event)">
                <button onclick="sendMessage()">➤</button>
            </div>
        </div>
        <button class="chat-toggle" onclick="toggleChat()" id="chatToggle">🤖</button>
    `;
    document.body.appendChild(widget);
}

function toggleChat() {
    isChatOpen = !isChatOpen;
    const chatBox = document.getElementById('chatBox');
    const toggle = document.getElementById('chatToggle');
    if (isChatOpen) {
        chatBox.classList.add('open');
        toggle.textContent = '✕';
        document.getElementById('chatInput').focus();
    } else {
        chatBox.classList.remove('open');
        toggle.textContent = '🤖';
    }
}

function handleChatKey(event) {
    if (event.key === 'Enter') sendMessage();
}

function sendSuggestion(text) {
    document.getElementById('chatInput').value = text;
    sendMessage();
}

function addMessage(text, type) {
    const messages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `chat-message ${type}`;
    div.innerHTML = `
        <div class="avatar">${type === 'bot' ? '🤖' : '👤'}</div>
        <div class="bubble">${text}</div>
    `;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
    const messages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.id = 'typingIndicator';
    div.innerHTML = `
        <div class="avatar">🤖</div>
        <div class="chat-typing">
            <span></span><span></span><span></span>
        </div>
    `;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function removeTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

function getBotResponse(message) {
    const lower = message.toLowerCase();
    for (const key in responses) {
        const item = responses[key];
        if (item.keywords.some(keyword => lower.includes(keyword))) {
            return item.response;
        }
    }
    return defaultResponse;
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    input.value = '';
    addMessage(message, 'user');
    showTyping();

    // Simulate typing delay
    setTimeout(() => {
        removeTyping();
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 800);
}

document.addEventListener('DOMContentLoaded', createChatWidget);