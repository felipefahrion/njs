const errorHandler = require('../src/utils/error-handler');

describe('error-handler', () => {
    it('should return error message for status 404', () => {
        const error = { status: 404 };
        const result = errorHandler(error);
        expect(result).toEqual({ error: 'Value not found for specified ID' });
      });
    
      it('should return error message for status 400', () => {
        const error = { status: 400 };
        const result = errorHandler(error);
        expect(result).toEqual({ error: 'Incorrect value in result; no ID specified; value is invalid' });
      });
    
      it('should return error message for status 503', () => {
        const error = { status: 503 };
        const result = errorHandler(error);
        expect(result).toEqual({ error: 'Error communicating with database' });
      });
})