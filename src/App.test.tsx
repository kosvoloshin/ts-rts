import React from 'react';
import fetch from 'jest-fetch-mock';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
    it('app render', async () => {
        render(<App />);
        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it("input name focus", () => {
      const { getByLabelText } = render(<App />);
      const input = getByLabelText(/Name/);
      expect(input).not.toHaveFocus();
      input.focus();
      expect(input).toHaveFocus();
    });

    it("input age focus", () => {
      const { getByLabelText } = render(<App />);
      const input = getByLabelText(/Age/);
      expect(input).not.toHaveFocus();
      input.focus();
      expect(input).toHaveFocus();
    });

    it("radio gender (male) click", () => {
      const { getByLabelText } = render(<App />);
      const radioButton = getByLabelText(/Male/);
      expect(radioButton).not.toBeChecked();
      userEvent.click(radioButton);
      expect(radioButton).toBeChecked();
    });

    it("radio gender (female) click", () => {
      const { getByLabelText } = render(<App />);
      const radioButton = getByLabelText(/Female/);
      expect(radioButton).not.toBeChecked();
      userEvent.click(radioButton);
      expect(radioButton).toBeChecked();
    });

    it("select option", () => {
      const { getByLabelText, getByText } = render(<App />);
      userEvent.selectOptions(getByLabelText(/Status/) , 'active') ;
      expect(getByText("Active" ).selected).toBeTruthy();
      expect(getByText("Active").selected).toBeTruthy();

      userEvent.selectOptions(getByLabelText(/Status/), 'inactive');
      expect(getByText("Inactive").selected).toBeTruthy();
      expect(getByText("Active").selected).toBeFalsy();
    });

    it("Fetch data from api", async () => {
      const promise: any = Promise.resolve({ data: {  } });
      fetch.mockImplementationOnce(() => promise);
      const { getByText, findAllByRole } = render(<App />);
      userEvent.click(getByText('Add employer'));
    //   expect(fetch).toHaveBeenCalledWith('/api/82731997a4b24029814d6bce8bd28e58/unicorns');
    });
});
