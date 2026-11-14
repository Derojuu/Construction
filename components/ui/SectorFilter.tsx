import React from "react";
import { SectorFilter as SectorFilterType } from "@/types";
import { LabelBadge } from "./LabelBadge";

export interface SectorFilterProps {
  filters: SectorFilterType[];
  className?: string;
  selectedSector?: string | null;
  onSelect?: (sector: string) => void;
}

export function SectorFilter({
  filters,
  className,
  selectedSector,
  onSelect,
}: SectorFilterProps) {
  return (
    <div className={className || "buttons"}>
      {filters.map((filter) => (
        <LabelBadge
          key={filter.label}
          label={filter.label}
          href={filter.href}
          active={selectedSector === filter.label}
          onClick={onSelect ? () => onSelect(filter.label) : undefined}
        />
      ))}
    </div>
  );
}
