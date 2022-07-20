import { describe, it, expect } from "vitest";

import { render } from "@testing-library/vue";
import TopBar from "../the-top-bar.vue";

describe("Top bar", () => {
  const { queryByText } = render(TopBar);

  it("has a correct title text", () => {
    expect(queryByText('Test')).not.toBeNull();
  });
});
