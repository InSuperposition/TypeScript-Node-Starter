const mockUnique = 1;
export const v4 = jest.fn(() => `uuid-v4-${mockUnique}`);

export default { v4 };
