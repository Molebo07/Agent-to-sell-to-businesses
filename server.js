const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const tenantData = [
  {
    id: 'tenant-001',
    name: 'Nandi Nails & Spa',
    owner: 'Nandi Mokoena',
    plan: 'Growth',
    active: true,
    responseTime: '2.1s',
    handoffRate: '7%',
    conversations: 312,
    region: 'Johannesburg, SA',
  },
  {
    id: 'tenant-002',
    name: 'Cape Coastal Realty',
    owner: 'Ethan Ross',
    plan: 'Scale',
    active: true,
    responseTime: '1.8s',
    handoffRate: '12%',
    conversations: 586,
    region: 'Cape Town, SA',
  },
  {
    id: 'tenant-003',
    name: 'Umlilo Pharmacy',
    owner: 'Lerato Simelane',
    plan: 'Starter',
    active: false,
    responseTime: '3.4s',
    handoffRate: '18%',
    conversations: 142,
    region: 'Durban, SA',
  },
];

const conversationData = [
  { id: 'conv-101', tenantId: 'tenant-001', customer: 'Aphiwe', channel: 'WhatsApp', status: 'AI_ACTIVE', lastMessage: 'Do you offer eyebrow tinting today?' },
  { id: 'conv-102', tenantId: 'tenant-002', customer: 'Samantha', channel: 'Website', status: 'HANDOFF_REQUESTED', lastMessage: 'I need 3 bed apartments near the city centre.' },
  { id: 'conv-103', tenantId: 'tenant-001', customer: 'Lwazi', channel: 'WhatsApp', status: 'HUMAN_ACTIVE', lastMessage: 'Can you confirm the booking for Saturday?' },
];

const metrics = {
  tenants: 64,
  monthlyMessages: 181200,
  resolutionRate: '86.4%',
  handoffRate: '11.7%',
  avgLatencyMs: 2150,
  revenueMrr: 'R184,200',
};

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', name: 'Agent-to-sell-to-businesses', timestamp: new Date().toISOString() });
});

app.get('/api/tenants', (req, res) => {
  res.json({ tenants: tenantData });
});

app.get('/api/conversations', (req, res) => {
  res.json({ conversations: conversationData });
});

app.get('/api/metrics', (req, res) => {
  res.json({ metrics });
});

app.post('/api/lead-capture', (req, res) => {
  const payload = req.body || {};

  res.json({
    ok: true,
    lead: {
      name: payload.name || 'New lead',
      company: payload.company || 'Not provided',
      email: payload.email || 'n/a',
      capturedAt: new Date().toISOString(),
      source: 'website-widget',
    },
  });
});

app.post('/api/widget/session', (req, res) => {
  const payload = req.body || {};
  res.json({
    ok: true,
    sessionToken: `session-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    tenantId: payload.tenantId || 'tenant-001',
    allowOrigin: payload.origin || 'https://example.com',
    expiresIn: 1800,
  });
});

app.get('/widget.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'widget.js'));
});

app.get('*', (req, res) => {
  if (req.path === '/app') {
    return res.sendFile(path.join(__dirname, 'public', 'app.html'));
  }

  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Platform demo running at http://localhost:${PORT}`);
});
