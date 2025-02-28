import assert from "assert";
import { 
  TestHelpers,
  UshiToken_Approval
} from "generated";
const { MockDb, UshiToken } = TestHelpers;

describe("UshiToken contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for UshiToken contract Approval event
  const event = UshiToken.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("UshiToken_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await UshiToken.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualUshiTokenApproval = mockDbUpdated.entities.UshiToken_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedUshiTokenApproval: UshiToken_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualUshiTokenApproval, expectedUshiTokenApproval, "Actual UshiTokenApproval should be the same as the expectedUshiTokenApproval");
  });
});
