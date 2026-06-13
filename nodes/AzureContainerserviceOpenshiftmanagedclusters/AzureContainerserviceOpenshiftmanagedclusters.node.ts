import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureContainerserviceOpenshiftmanagedclusters implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Containerservice Openshiftmanagedclusters',
                name: 'N8nDevAzureContainerserviceOpenshiftmanagedclusters',
                icon: { light: 'file:./azure-containerservice-openshiftmanagedclusters.png', dark: 'file:./azure-containerservice-openshiftmanagedclusters.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Container Service Client.',
                defaults: { name: 'Azure Containerservice Openshiftmanagedclusters' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureContainerserviceOpenshiftmanagedclustersApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
