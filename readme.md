# saasy-cloud

## role
- AuthN/AuthZ, tenancy, session context for the control plane.

## allowed responsibilities
- Validate identity and tenancy context for AgentSassy.
- Provide auth context to the control spine.

## forbidden overlaps
- No intent routing, no tool governance, no execution logic.

## interfaces
- `validateAuth(controlRequest)` returns AuthContext (stubbed in Phase 1).

## mock limitations
- Identity and tenancy data are stubbed for local control-flow testing.
