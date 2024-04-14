# Neovim-Essentials: Unleash Your Productivity with Plugins and Keymap ⚡️

Welcome to NeoVim Productivity Unleashed! This repository is dedicated to providing you with a curated list of essential NeoVim plugins and a powerful keymap to boost your productivity.

## Keymaps

Explore our powerful keymap for efficient navigation and editing:

- Command to toggle inline diagnostics
```
vim.keymap.set("n", "<space>zx", function()
  local current_value = vim.diagnostic.config().virtual_text
  if current_value then
    vim.diagnostic.config({ virtual_text = false })
  else
    vim.diagnostic.config({ virtual_text = true })
  end
end, { desc = "toggle inline diagnostics" })
```
`
- Function to check if a floating dialog exists and if not then check for diagnostics under the cursor
```
function OpenDiagnosticIfNoFloat()
  for _, winid in pairs(vim.api.nvim_tabpage_list_wins(0)) do
    if vim.api.nvim_win_get_config(winid).zindex then
      return
    end
  end
  -- THIS IS FOR BUILTIN LSP
  vim.diagnostic.open_float(0, {
    scope = "cursor",
    focusable = false,
    close_events = {
      "CursorMoved",
      "CursorMovedI",
      "BufHidden",
      "InsertCharPre",
      "WinLeave",
    },
  })
end
```
- Show diagnostics under the cursor when holding position
```
vim.api.nvim_create_augroup("lsp_diagnostics_hold", { clear = true })
vim.api.nvim_create_autocmd({ "CursorHold" }, {
  pattern = "*",
  command = "lua OpenDiagnosticIfNoFloat()",
  group = "lsp_diagnostics_hold",
})

--focus  on float window with dialog
vim.keymap.set(
  "n",
  "<space>zz",
  "<cmd> lua vim.diagnostic.open_float()<cr><cmd>lua vim.diagnostic.open_float()<cr>",
  { silent = true }
)
```

- Focus on float window with dialog
```
vim.keymap.set(
  "n",
  "<space>zz",
  "<cmd> lua vim.diagnostic.open_float()<cr><cmd>lua vim.diagnostic.open_float()<cr>",
  { silent = true }
)
```
- Focus on float window with dialog and copy contents
```
vim.keymap.set(
  "n",
  "<space>zy",
  "<cmd> lua vim.diagnostic.open_float()<cr><cmd>lua vim.diagnostic.open_float()<cr><cmd>lua vim.cmd('normal! ggVGy')<cr>",
  { silent = true }
)
```

## Plugins

Discover the following essential plugins:

- Comments Plugin
  ```
  {
    "numToStr/Comment.nvim",
    opts = {
      -- add any options here
    },
    lazy = false,
  }
  ```

## Contributing
We welcome and appreciate contributions from the community! Whether you want to add new plugins, improve existing ones, enhance the keymap, or fix issues, your contributions are valuable.

## Credits
- [Comments Plugin](https://github.com/numToStr/Comment.nvim)
- [Dialog Focus](https://www.reddit.com/r/neovim/comments/13cmg65/how_to_focus_on_a_diagnostic_message/)
## License
This project is licensed under the [MIT License](LICENSE).
