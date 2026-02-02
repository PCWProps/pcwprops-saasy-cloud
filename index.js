const buildControlRequest = (payload = {}) => {
  const requestId = payload.requestId || `req-${Date.now()}`;
  return {
    requestId,
    timestamp: new Date().toISOString(),
    intent: payload.intent || "control.request",
    input: payload.input || payload,
    auth: payload.auth || {},
  };
};

const validateAuth = (controlRequest) => {
  const auth = controlRequest.auth || {};
  return {
    subjectId: auth.subjectId || "user-local",
    subjectType: auth.subjectType || "user",
    tenantId: auth.tenantId || "tenant-local",
    sessionId: auth.sessionId || "session-local",
    authLevel: auth.authLevel || "authenticated",
    roles: auth.roles || ["operator"],
    scopes: auth.scopes || ["control:read", "control:write"],
    issuedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
  };
};

module.exports = {
  buildControlRequest,
  validateAuth,
};
