import { runScenarios } from "@/content/simulations/run-scenarios";

export function getRunScenarios() {
  return [...runScenarios];
}

export function getRunScenarioBySlug(scenarioSlug: string) {
  return runScenarios.find((scenario) => scenario.slug === scenarioSlug) ?? null;
}

export function getRunScenarioById(scenarioId: string) {
  return runScenarios.find((scenario) => scenario.id === scenarioId) ?? null;
}
