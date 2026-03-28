"use client";

import { useMemo, useState } from "react";
import { BuilderStep } from "@/components/builder/BuilderStep";
import { BuilderSummary } from "@/components/builder/BuilderSummary";
import { WhyThisDesign } from "@/components/builder/WhyThisDesign";
import type { BuilderOptionGroup, WorkflowBuilderDraft } from "@/lib/types/builder";
import type { WorkflowRecord } from "@/lib/types/content";
import {
  buildWorkflowRecommendation,
  createEmptyBuilderDraft,
  isBuilderDraftComplete
} from "@/lib/content-loaders/builder";

interface BuilderFormProps {
  groups: BuilderOptionGroup[];
  workflows: WorkflowRecord[];
}

export function BuilderForm({ groups, workflows }: BuilderFormProps) {
  const [draft, setDraft] = useState<WorkflowBuilderDraft>(createEmptyBuilderDraft());

  function toggleSelection(groupId: BuilderOptionGroup["id"], optionId: string) {
    setDraft((current) => {
      if (groupId === "context" || groupId === "tools") {
        const currentValues = current[groupId];
        const nextValues = currentValues.includes(optionId)
          ? currentValues.filter((value) => value !== optionId)
          : [...currentValues, optionId];

        return {
          ...current,
          [groupId]: nextValues
        };
      }

      return {
        ...current,
        [groupId]: current[groupId] === optionId ? undefined : optionId
      };
    });
  }

  const result = useMemo(() => buildWorkflowRecommendation(draft), [draft]);
  const relatedExamples = workflows.filter((workflow) => result.relatedExampleWorkflowIds.includes(workflow.id));
  const isComplete = isBuilderDraftComplete(draft);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {groups.map((group) => (
            <BuilderStep key={group.id} group={group} draft={draft} onToggle={toggleSelection} />
          ))}
        </div>

        <div className="space-y-6 xl:sticky xl:top-6 xl:self-start">
          <BuilderSummary draft={draft} groups={groups} />
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">Draft status</h2>
            <p className="mt-2 text-slate-300">
              {isComplete
                ? "All option groups are filled in, so the recommendation below is based on a complete deterministic draft."
                : "You can already inspect the recommendation below, but filling every group produces the strongest MVP workflow shape."}
            </p>
          </section>
        </div>
      </div>

      <WhyThisDesign result={result} relatedExamples={relatedExamples} />
    </div>
  );
}
