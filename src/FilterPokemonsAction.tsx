import { Box, FormControl, InputBase, MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import { useState } from "react";
import './FilterPokemonsAction.css';

export default function FilterPokemonsAction() {
  const [filterParam, setFilterParam] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilterParam(event.target.value);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      border: '1px solid #d2d5d6',
      padding: '3px 26px 3px 12px',
      '&:focus': {
        borderColor: '#646cff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
    'svg': {
      color: '#d2d5d6'
    }
  }));

  return (
      <div className="filter_action_container">
        <span className="filter_label">Filter by type</span>
        <Box sx={{ m: 1, minWidth: 120 }}
             size="small">
          <FormControl fullWidth>
            <Select
                value={filterParam}
                onChange={handleChange}
                displayEmpty
                input={<BootstrapInput/>}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box></div>
  );
}