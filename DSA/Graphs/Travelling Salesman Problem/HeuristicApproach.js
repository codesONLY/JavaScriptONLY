function solveILPHeuristic() {
    const coefficients = [2, 3, 5]; // Coefficients of the objective function
    const constraintCoefficients = [
        [1, 2, 1], // Coefficients of the constraints
    ];
    const constraintLimits = [0]; // Right-hand side of the constraints

    const numVariables = coefficients.length;
    const numConstraints = constraintCoefficients.length;

    const solution = Array(numVariables).fill(0);
    let objectiveValue = 0;

    for (let i = 0; i < numVariables; i++) {
        // Calculate the marginal contribution of variable i to the objective function
        const marginalContribution = coefficients[i];

        // Check if adding variable i to the solution violates any constraints
        let isFeasible = true;
        for (let j = 0; j < numConstraints; j++) {
            let constraintValue = 0;
            for (let k = 0; k < numVariables; k++) {
                constraintValue += solution[k] * constraintCoefficients[j][k];
            }
            if (constraintValue + constraintCoefficients[j][i] > constraintLimits[j]) {
                isFeasible = false;
                break;
            }
        }

        // If adding variable i is feasible and improves the objective, include it in the solution
        if (isFeasible && marginalContribution > 0) {
            solution[i] = 1;
            objectiveValue += marginalContribution;
        }
    }

    return { solution, objectiveValue };
}

// Test the heuristic approach for ILP
const result = solveILPHeuristic();
console.log('Solution:', result.solution);
console.log('Objective Value (approximate):', result.objectiveValue);
