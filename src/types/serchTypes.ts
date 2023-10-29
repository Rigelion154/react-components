export interface SearchBarProps {
  handleOnSearch: (userValue: string) => void;
}

export interface SearchBarState {
  userInput: string | null;
}
