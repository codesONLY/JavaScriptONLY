function solveILP() {
    const coefficients = [2, 3, 5]; // Coefficients of the objective function
    const constraintCoefficients = [
        [1, 2, 1], // Coefficients of the constraints
    ];
    const constraintLimits = [0]; // Right-hand side of the constraints

    const numVariables = coefficients.length;
    const numConstraints = constraintCoefficients.length;

    let bestObjectiveValue = -Infinity;
    let bestSolution = Array(numVariables).fill(0);

    // Generate all possible binary combinations for the variables
    for (let i = 0; i < Math.pow(2, numVariables); i++) {
        const binary = (i >>> 0).toString(2).padStart(numVariables, '0').split('').map(Number);
        let isFeasible = true;

        // Check if the binary combination satisfies the constraints
        for (let j = 0; j < numConstraints; j++) {
            let constraintValue = 0;
            for (let k = 0; k < numVariables; k++) {
                constraintValue += binary[k] * constraintCoefficients[j][k];
            }
            if (constraintValue > constraintLimits[j]) {
                isFeasible = false;
                break;
            }
        }

        if (isFeasible) {
            // Calculate the objective value for this combination
            let objectiveValue = 0;
            for (let k = 0; k < numVariables; k++) {
                objectiveValue += binary[k] * coefficients[k];
            }

            // Update the best solution if this combination has a better objective value
            if (objectiveValue > bestObjectiveValue) {
                bestObjectiveValue = objectiveValue;
                bestSolution = [...binary];
            }
        }
    }

    return { solution: bestSolution, objectiveValue: bestObjectiveValue };
}

// Test the ILP solver
const result = solveILP();
console.log('Solution:', result.solution);
console.log('Optimal Objective Value:', result.objectiveValue);
