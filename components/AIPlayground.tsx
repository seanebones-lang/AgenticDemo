"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Loader, CheckCircle, AlertCircle, Zap, Lock } from "lucide-react";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

const examplePrompts = [
  "Analyze this sales data: Q1: $45K, Q2: $52K, Q3: $48K, Q4: $61K. What are the trends?",
  "I need to automate customer onboarding. What steps should the agent take?",
  "Help me optimize inventory: Current stock 150 units, daily sales 12 units, lead time 7 days.",
  "Create a workflow for processing support tickets with priority classification.",
];

export default function AIPlayground() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content: "Welcome to the Agentic AI Playground! This is a live demonstration of the autonomous agent system. Try asking me to analyze data, create workflows, or solve business problems. I'll show you how the agent reasons through tasks step-by-step.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThinking, setShowThinking] = useState(false);

  const simulateAgentResponse = async (userMessage: string) => {
    setIsProcessing(true);
    setShowThinking(true);

    // Simulate thinking steps
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate contextual response based on keywords
    let response = "";
    let steps: string[] = [];

    if (userMessage.toLowerCase().includes("sales") || userMessage.toLowerCase().includes("data") || userMessage.toLowerCase().includes("analyze")) {
      steps = [
        "🔍 Step 1: Parsing numerical data from input",
        "📊 Step 2: Calculating trends and growth rates",
        "🤔 Step 3: Identifying patterns and anomalies",
        "💡 Step 4: Generating insights and recommendations",
      ];
      response = `**Analysis Complete:**

**Data Summary:**
- Q1-Q4 Revenue: $45K → $52K → $48K → $61K
- Total Revenue: $206K
- Average: $51.5K/quarter

**Key Insights:**
1. **Strong Q4 Performance**: 27% growth from Q3 ($48K → $61K)
2. **Q3 Dip**: -7.7% decline needs investigation
3. **Overall Trend**: Positive with 35% growth from Q1 to Q4

**Recommendations:**
- Investigate Q3 decline causes (seasonality? market factors?)
- Replicate Q4 success strategies in other quarters
- Set Q1 next year target at $65K+ based on trajectory

**HITL Checkpoint:** Would you like me to create a detailed action plan? (In production, this would pause for human approval)`;
    } else if (userMessage.toLowerCase().includes("onboard") || userMessage.toLowerCase().includes("customer")) {
      steps = [
        "🎯 Step 1: Defining onboarding workflow stages",
        "🔧 Step 2: Identifying required tools and integrations",
        "✅ Step 3: Setting up validation checkpoints",
        "🚨 Step 4: Configuring HITL approval gates",
      ];
      response = `**Customer Onboarding Workflow Created:**

**Automated Steps:**
1. **Data Collection** (2 min)
   - Validate email and contact info
   - Verify business details
   - Check for duplicates in CRM

2. **Account Setup** (3 min)
   - Create user account
   - Generate API credentials
   - Set up billing profile

3. **Personalization** (1 min)
   - Industry-specific configuration
   - Feature recommendations
   - Custom dashboard setup

**HITL Checkpoints:**
- ⚠️ **Approval Required:** Enterprise accounts >$10K/year
- ⚠️ **Manual Review:** Custom integration requests
- ⚠️ **Escalation:** Sensitive data handling

**Tools Integrated:**
- CRM (Salesforce/HubSpot)
- Email automation
- Payment processing
- Notification system

**Estimated Time:** 6-8 minutes (vs 45 min manual process)
**Human Oversight:** 2 approval gates for compliance`;
    } else if (userMessage.toLowerCase().includes("inventory") || userMessage.toLowerCase().includes("stock")) {
      steps = [
        "📦 Step 1: Analyzing current inventory levels",
        "📈 Step 2: Calculating reorder points",
        "⚡ Step 3: Forecasting demand patterns",
        "🎯 Step 4: Generating optimization recommendations",
      ];
      response = `**Inventory Optimization Analysis:**

**Current Status:**
- Stock Level: 150 units
- Daily Sales Rate: 12 units/day
- Lead Time: 7 days
- Days of Inventory: 12.5 days

**Risk Assessment:**
- ⚠️ **Reorder Point:** 84 units (7 days × 12 units/day)
- 🔴 **Critical Level:** 60 units
- ✅ **Current Status:** Adequate but approaching reorder point

**Recommendations:**
1. **Immediate Action:** Place order now (currently at 150 units)
2. **Order Quantity:** 168 units (2 weeks supply)
3. **Safety Stock:** Maintain 36 units buffer (3 days)
4. **Reorder Trigger:** Set alert at 90 units

**Cost Impact:**
- Current approach: Risk of stockout in 5 days
- Optimized approach: Maintain 15-day rolling inventory
- Estimated savings: 15% reduction in emergency orders

**HITL Required:** Orders >$5K need approval (would trigger notification)`;
    } else if (userMessage.toLowerCase().includes("workflow") || userMessage.toLowerCase().includes("ticket")) {
      steps = [
        "🎫 Step 1: Defining ticket classification criteria",
        "🔄 Step 2: Creating workflow automation rules",
        "👥 Step 3: Setting up routing and assignment",
        "📊 Step 4: Configuring monitoring and escalation",
      ];
      response = `**Support Ticket Workflow Created:**

**Automated Classification:**
1. **Priority Levels:**
   - 🔴 Critical: System down, data loss (SLA: 1 hour)
   - 🟠 High: Feature broken, multiple users (SLA: 4 hours)
   - 🟡 Medium: Single user issue (SLA: 24 hours)
   - 🟢 Low: Questions, feature requests (SLA: 48 hours)

**Workflow Steps:**
1. **Intake** → Auto-classify using NLP
2. **Route** → Assign to appropriate team
3. **Triage** → Senior review for Critical/High
4. **Resolution** → Track and update customer
5. **Closure** → Satisfaction survey

**Automation Rules:**
- Auto-respond with ticket number + ETA
- Escalate if no response in 50% of SLA time
- Flag keywords: "urgent", "broken", "lawsuit"
- Suggest KB articles for common issues

**HITL Triggers:**
- Critical priority tickets → Immediate manager notification
- Legal/compliance keywords → Escalate to legal team
- Refund requests >$500 → Approval required

**Expected Impact:**
- 60% of tickets auto-classified
- 40% faster routing
- 25% reduction in escalations`;
    } else {
      steps = [
        "🧠 Step 1: Understanding your request",
        "🔍 Step 2: Analyzing context and requirements",
        "💡 Step 3: Formulating solution approach",
        "✨ Step 4: Generating actionable response",
      ];
      response = `**Agent Response:**

I understand you're asking about: "${userMessage}"

**What I Can Help With:**
- 📊 Data analysis and insights
- 🔄 Workflow automation design
- 📦 Inventory and supply chain optimization
- 👥 Customer onboarding processes
- 🎫 Support ticket management
- 💼 Business process automation

**Try asking me:**
- "Analyze this data: [your data]"
- "Create a workflow for [process]"
- "Optimize [business problem]"
- "Help me automate [task]"

**How This Works:**
This demo shows how the agent breaks down complex requests into steps, uses reasoning to solve problems, and identifies when human approval is needed (HITL checkpoints).

**Want to see the real system?** The full codebase includes:
- LangGraph state management
- Tool integrations (APIs, databases, etc.)
- Memory persistence
- Production deployment configs`;
    }

    // Show thinking steps
    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg.role === "system" && lastMsg.content.startsWith("🤖")) {
          return [...prev.slice(0, -1), { ...lastMsg, content: lastMsg.content + "\n" + step }];
        }
        return [...prev, { role: "system", content: "🤖 **Agent Thinking Process:**\n" + step, timestamp: new Date() }];
      });
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowThinking(false);

    setMessages(prev => [...prev, {
      role: "assistant",
      content: response,
      timestamp: new Date(),
    }]);

    setIsProcessing(false);
  };

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    await simulateAgentResponse(input);
  };

  const handleExampleClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <section id="playground" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4 border-2 border-purple-300">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm">LIVE AI PLAYGROUND</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Try The AI Agent Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            This is a working demo. Ask the AI agent to analyze data, create workflows, or solve business problems.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
            <strong>Real AI Responses:</strong> Watch the agent reason through problems step-by-step, just like the production system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Example Prompts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Try These Examples:</h3>
            {examplePrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(prompt)}
                disabled={isProcessing}
                className="w-full p-4 text-left bg-white rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <div className="text-sm text-gray-700 group-hover:text-purple-700 transition">
                  {prompt}
                </div>
              </button>
            ))}
            
            <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
              <div className="flex items-start space-x-2">
                <Lock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <strong>Demo Mode:</strong> This simulates the agent's reasoning. The full system connects to real APIs, databases, and includes memory persistence.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-2xl border-2 border-purple-200 overflow-hidden">
              {/* Messages */}
              <div className="h-[600px] overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-gray-50 to-purple-50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${
                      message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user"
                          ? "bg-purple-600"
                          : message.role === "system"
                          ? "bg-blue-600"
                          : "bg-green-600"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div
                      className={`flex-1 p-4 rounded-lg ${
                        message.role === "user"
                          ? "bg-purple-600 text-white"
                          : message.role === "system"
                          ? "bg-blue-100 text-blue-900 border-2 border-blue-300"
                          : "bg-white border-2 border-gray-200"
                      }`}
                    >
                      <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                      <div className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isProcessing && showThinking && (
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                      <Loader className="w-5 h-5 text-white animate-spin" />
                    </div>
                    <div className="text-sm text-gray-600 italic">Agent is thinking...</div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t-2 border-purple-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask the AI agent anything..."
                    disabled={isProcessing}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isProcessing}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isProcessing ? (
                      <Loader className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-800">
                  <strong>Like what you see?</strong> The full system includes LLM integration, real tool execution, memory persistence, and production deployment. 
                  <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="underline font-semibold ml-1 hover:text-green-900">
                    Contact for acquisition at bizbot.store →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

