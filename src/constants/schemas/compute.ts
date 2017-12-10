// tslint:disable:max-line-length
export const compute = {
  id: 'https://schema.management.azure.com/schemas/2017-03-30/Microsoft.Compute.json#',
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Microsoft.Compute',
  description: 'Microsoft Compute Resource Types',
  resourceDefinitions: {
    availabilitySets: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        type: {
          type: 'string',
          enum: [
            'Microsoft.Compute/availabilitySets'
          ]
        },
        apiVersion: {
          type: 'string',
          enum: [
            '2017-03-30'
          ]
        },
        location: {
          type: 'string',
          description: 'Resource location'
        },
        tags: {
          oneOf: [
            {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource tags'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/AvailabilitySetProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        },
        sku: {
          oneOf: [
            {
              $ref: '#/definitions/Sku'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Sku of the availability set'
        }
      },
      required: [
        'name',
        'type',
        'apiVersion',
        'location',
        'properties'
      ],
      description: 'Microsoft.Compute/availabilitySets'
    },
    disks: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the disk within the given subscription and resource group.'
        },
        type: {
          type: 'string',
          enum: [
            'Microsoft.Compute/disks'
          ]
        },
        apiVersion: {
          type: 'string',
          enum: [
            '2017-03-30'
          ]
        },
        location: {
          type: 'string',
          description: 'Resource location'
        },
        tags: {
          oneOf: [
            {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource tags'
        },
        sku: {
          oneOf: [
            {
              $ref: '#/definitions/DiskSku'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        },
        zones: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Logical zone list for Disk.'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/DiskProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      required: [
        'name',
        'type',
        'apiVersion',
        'location',
        'properties'
      ],
      description: 'Microsoft.Compute/disks'
    },
    images: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        type: {
          type: 'string',
          enum: [
            'Microsoft.Compute/images'
          ]
        },
        apiVersion: {
          type: 'string',
          enum: [
            '2017-03-30'
          ]
        },
        location: {
          type: 'string',
          description: 'Resource location'
        },
        tags: {
          oneOf: [
            {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource tags'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/ImageProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      required: [
        'name',
        'type',
        'apiVersion',
        'location',
        'properties'
      ],
      description: 'Microsoft.Compute/images'
    },
    snapshots: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the snapshot within the given subscription and resource group.'
        },
        type: {
          type: 'string',
          enum: [
            'Microsoft.Compute/snapshots'
          ]
        },
        apiVersion: {
          type: 'string',
          enum: [
            '2017-03-30'
          ]
        },
        location: {
          type: 'string',
          description: 'Resource location'
        },
        tags: {
          oneOf: [
            {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource tags'
        },
        sku: {
          oneOf: [
            {
              $ref: '#/definitions/DiskSku'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/DiskProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      required: [
        'name',
        'type',
        'apiVersion',
        'location',
        'properties'
      ],
      description: 'Microsoft.Compute/snapshots'
    },
    virtualMachines: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        type: {
          type: 'string',
          enum: [
            'Microsoft.Compute/virtualMachines'
          ]
        },
        apiVersion: {
          type: 'string',
          enum: [
            '2017-03-30'
          ]
        },
        location: {
          type: 'string',
          description: 'Resource location'
        },
        tags: {
          oneOf: [
            {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource tags'
        },
        plan: {
          oneOf: [
            {
              $ref: '#/definitions/Plan'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The purchase plan when deploying virtual machine from VM Marketplace images.'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        },
        identity: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineIdentity'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The identity of the virtual machine, if configured.'
        },
        zones: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine zones.'
        },
        resources: {
          type: 'array',
          items: {
            oneOf: [
              {
                $ref: '#/definitions/extensionsChild'
              }
            ]
          }
        }
      },
      required: [
        'name',
        'type',
        'apiVersion',
        'location',
        'properties'
      ],
      description: 'Microsoft.Compute/virtualMachines'
    },
    extensions: {
      type: 'object',
      properties: {
        type: {
          enum: [
            'Microsoft.Compute/virtualMachines/extensions'
          ]
        },
        apiVersion: {
          enum: [
            '2017-03-30'
          ]
        },
        location: {
          type: 'string',
          description: 'Resource location'
        },
        properties: {
          anyOf: [
            { $ref: '#/definitions/genericExtension' },
            { $ref: '#/definitions/iaaSDiagnostics' },
            { $ref: '#/definitions/iaaSAntimalware' },
            { $ref: '#/definitions/customScriptExtension' },
            { $ref: '#/definitions/customScriptForLinux'},
            { $ref: '#/definitions/linuxDiagnostic'},
            { $ref: '#/definitions/vmAccessForLinux'},
            { $ref: '#/definitions/bgInfo'},
            { $ref: '#/definitions/vmAccessAgent'},
            { $ref: '#/definitions/dscExtension'},
            { $ref: '#/definitions/acronisBackupLinux'},
            { $ref: '#/definitions/acronisBackup'},
            { $ref: '#/definitions/linuxChefClient'},
            { $ref: '#/definitions/chefClient'},
            { $ref: '#/definitions/datadogLinuxAgent'},
            { $ref: '#/definitions/datadogWindowsAgent'},
            { $ref: '#/definitions/dockerExtension'},
            { $ref: '#/definitions/dynatraceLinux'},
            { $ref: '#/definitions/dynatraceWindows'},
            { $ref: '#/definitions/eset'},
            { $ref: '#/definitions/hpeSecurityApplicationDefender'},
            { $ref: '#/definitions/puppetAgent'},
            { $ref: '#/definitions/site24x7LinuxServerExtn'},
            { $ref: '#/definitions/site24x7WindowsServerExtn'},
            { $ref: '#/definitions/site24x7ApmInsightExtn'},
            { $ref: '#/definitions/trendMicroDSALinux'},
            { $ref: '#/definitions/trendMicroDSA'},
            { $ref: '#/definitions/bmcCtmAgentLinux'},
            { $ref: '#/definitions/bmcCtmAgentWindows'},
            { $ref: '#/definitions/OSPatchingForLinux'},
            { $ref: '#/definitions/VMSnapshot'},
            { $ref: '#/definitions/VMSnapshotLinux'},
            { $ref: '#/definitions/customScript' },
            { $ref: '#/definitions/networkWatcherAgentWindows'},
            { $ref: '#/definitions/networkWatcherAgentLinux'}
          ]
        }
      },
      required: [
        'type',
        'apiVersion',
        'location',
        'properties'
      ],
      description: 'Microsoft.Compute/virtualMachines/extensions'
    },
    virtualMachineScaleSets: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        type: {
          type: 'string',
          enum: [
            'Microsoft.Compute/virtualMachineScaleSets'
          ]
        },
        apiVersion: {
          type: 'string',
          enum: [
            '2017-03-30'
          ]
        },
        location: {
          type: 'string',
          description: 'Resource location'
        },
        tags: {
          oneOf: [
            {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource tags'
        },
        sku: {
          oneOf: [
            {
              $ref: '#/definitions/Sku'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set sku.'
        },
        plan: {
          oneOf: [
            {
              $ref: '#/definitions/Plan'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The purchase plan when deploying a virtual machine scale set from VM Marketplace images.'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        },
        identity: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetIdentity'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The identity of the virtual machine scale set, if configured.'
        },
        zones: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set zones.'
        },
        resources: {
          type: 'array',
          items: {
            oneOf: [
              {
                $ref: '#/definitions/extensionsChild'
              }
            ]
          }
        }
      },
      required: [
        'name',
        'type',
        'apiVersion',
        'location',
        'properties'
      ],
      description: 'Microsoft.Compute/virtualMachineScaleSets'
    }
  },
  definitions: {
    extensionsChild: {
      type: 'object',
      properties: {
        type: {
          enum: [
            'extensions'
          ]
        },
        apiVersion: {
          enum: [
            '2017-03-30'
          ]
        },
        properties: {
          anyOf: [
            { $ref: '#/definitions/genericExtension' },
            { $ref: '#/definitions/iaaSDiagnostics' },
            { $ref: '#/definitions/iaaSAntimalware' },
            { $ref: '#/definitions/customScriptExtension' },
            { $ref: '#/definitions/customScriptForLinux'},
            { $ref: '#/definitions/linuxDiagnostic'},
            { $ref: '#/definitions/vmAccessForLinux'},
            { $ref: '#/definitions/bgInfo'},
            { $ref: '#/definitions/vmAccessAgent'},
            { $ref: '#/definitions/dscExtension'},
            { $ref: '#/definitions/acronisBackupLinux'},
            { $ref: '#/definitions/acronisBackup'},
            { $ref: '#/definitions/linuxChefClient'},
            { $ref: '#/definitions/chefClient'},
            { $ref: '#/definitions/datadogLinuxAgent'},
            { $ref: '#/definitions/datadogWindowsAgent'},
            { $ref: '#/definitions/dockerExtension'},
            { $ref: '#/definitions/dynatraceLinux'},
            { $ref: '#/definitions/dynatraceWindows'},
            { $ref: '#/definitions/eset'},
            { $ref: '#/definitions/hpeSecurityApplicationDefender'},
            { $ref: '#/definitions/puppetAgent'},
            { $ref: '#/definitions/site24x7LinuxServerExtn'},
            { $ref: '#/definitions/site24x7WindowsServerExtn'},
            { $ref: '#/definitions/site24x7ApmInsightExtn'},
            { $ref: '#/definitions/trendMicroDSALinux'},
            { $ref: '#/definitions/trendMicroDSA'},
            { $ref: '#/definitions/bmcCtmAgentLinux'},
            { $ref: '#/definitions/bmcCtmAgentWindows'},
            { $ref: '#/definitions/OSPatchingForLinux'},
            { $ref: '#/definitions/VMSnapshot'},
            { $ref: '#/definitions/VMSnapshotLinux'},
            { $ref: '#/definitions/acronisBackupLinux'},
            { $ref: '#/definitions/acronisBackup'},
            { $ref: '#/definitions/linuxChefClient'},
            { $ref: '#/definitions/chefClient'},
            { $ref: '#/definitions/datadogLinuxAgent'},
            { $ref: '#/definitions/datadogWindowsAgent'},
            { $ref: '#/definitions/dockerExtension'},
            { $ref: '#/definitions/customScript' },
            { $ref: '#/definitions/networkWatcherAgentWindows'},
            { $ref: '#/definitions/networkWatcherAgentLinux'}
          ]
        }
      },
      required: [
        'type',
        'apiVersion',
        'properties',
        'location'
      ],
      description: 'Microsoft.Compute/extensionsChild'
    },
    AdditionalUnattendContent: {
      type: 'object',
      properties: {
        passName: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'oobeSystem'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The pass name. Currently, the only allowable value is oobeSystem.'
        },
        componentName: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Microsoft-Windows-Shell-Setup'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.'
        },
        settingName: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'AutoLogon',
                'FirstLogonCommands'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Setting name (e.g. FirstLogonCommands, AutoLogon ).'
        },
        content: {
          type: 'string',
          description: 'XML formatted content that is added to the unattend.xml file in the specified pass and component. The XML must be less than 4 KB and must include the root element for the setting or feature that is being inserted.'
        }
      },
      description: 'Additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is a applied.'
    },
    ApiEntityReference: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'The ARM resource id in the form of /subscriptions/{SubcriptionId}/resourceGroups/{ResourceGroupName}/...'
        }
      },
      description: 'The API entity reference.'
    },
    AvailabilitySetProperties: {
      type: 'object',
      properties: {
        platformUpdateDomainCount: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Update Domain count.'
        },
        platformFaultDomainCount: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Fault Domain count.'
        },
        virtualMachines: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/SubResource'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'A list of references to all virtual machines in the availability set.'
        }
      },
      description: 'The instance view of a resource.'
    },
    BootDiagnostics: {
      type: 'object',
      properties: {
        enabled: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Whether boot diagnostics should be enabled on the Virtual Machine.'
        },
        storageUri: {
          type: 'string',
          description: 'URI of the storage account to use for placing the console output and screenshot.'
        }
      },
      description: 'Describes Boot Diagnostics.'
    },
    CreationData: {
      type: 'object',
      properties: {
        createOption: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Empty',
                'Attach',
                'FromImage',
                'Import',
                'Copy'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'This enumerates the possible sources of a disk\'s creation.'
        },
        storageAccountId: {
          type: 'string',
          description: 'If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription'
        },
        imageReference: {
          oneOf: [
            {
              $ref: '#/definitions/ImageDiskReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Disk source information.'
        },
        sourceUri: {
          type: 'string',
          description: 'If creationOption is Import, this is the URI of a blob to be imported into a managed disk.'
        },
        sourceResourceId: {
          type: 'string',
          description: 'If createOption is Copy, this is the ARM id of the source snapshot or disk.'
        }
      },
      required: [
        'createOption'
      ],
      description: 'Data used when creating a disk.'
    },
    DataDisk: {
      type: 'object',
      properties: {
        lun: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The logical unit number.'
        },
        name: {
          type: 'string',
          description: 'The disk name.'
        },
        vhd: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualHardDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual hard disk.'
        },
        image: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualHardDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The source user image virtual hard disk. This virtual hard disk will be copied before using it to attach to the virtual machine. If SourceImage is provided, the destination virtual hard disk must not exist.'
        },
        caching: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'None',
                'ReadOnly',
                'ReadWrite'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The caching type.'
        },
        createOption: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'FromImage',
                'Empty',
                'Attach'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The create option.'
        },
        diskSizeGB: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The initial disk size in GB for blank data disks, and the new desired size for resizing existing OS and data disks.'
        },
        managedDisk: {
          oneOf: [
            {
              $ref: '#/definitions/ManagedDiskParameters'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The managed disk parameters.'
        }
      },
      required: [
        'lun',
        'createOption'
      ],
      description: 'Describes a data disk.'
    },
    DiagnosticsProfile: {
      type: 'object',
      properties: {
        bootDiagnostics: {
          oneOf: [
            {
              $ref: '#/definitions/BootDiagnostics'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Boot Diagnostics is a debugging feature which allows the user to view console output and/or a screenshot of the virtual machine from the hypervisor.'
        }
      },
      description: 'Describes a diagnostics profile.'
    },
    DiskEncryptionSettings: {
      type: 'object',
      properties: {
        diskEncryptionKey: {
          oneOf: [
            {
              $ref: '#/definitions/KeyVaultSecretReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The disk encryption key which is a Key Vault Secret.'
        },
        keyEncryptionKey: {
          oneOf: [
            {
              $ref: '#/definitions/KeyVaultKeyReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The key encryption key which is Key Vault Key.'
        },
        enabled: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Specifies whether disk encryption should be enabled on the virtual machine.'
        }
      },
      description: 'Describes a Encryption Settings for a Disk'
    },
    DiskProperties: {
      type: 'object',
      properties: {
        osType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Windows',
                'Linux'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Operating System type.'
        },
        creationData: {
          oneOf: [
            {
              $ref: '#/definitions/CreationData'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Disk source information. CreationData information cannot be changed after the disk has been created.'
        },
        diskSizeGB: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk\'s size.'
        },
        encryptionSettings: {
          oneOf: [
            {
              $ref: '#/definitions/EncryptionSettings'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Encryption settings for disk or snapshot'
        }
      },
      required: [
        'creationData'
      ],
      description: 'Disk resource properties.'
    },
    DiskSku: {
      type: 'object',
      properties: {
        name: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Standard_LRS',
                'Premium_LRS'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The sku name.'
        }
      },
      description: 'The disks and snapshots sku name. Can be Standard_LRS or Premium_LRS.'
    },
    EncryptionSettings: {
      type: 'object',
      properties: {
        enabled: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.'
        },
        diskEncryptionKey: {
          oneOf: [
            {
              $ref: '#/definitions/KeyVaultAndSecretReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Key Vault Secret Url and vault id of the disk encryption key'
        },
        keyEncryptionKey: {
          oneOf: [
            {
              $ref: '#/definitions/KeyVaultAndKeyReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Key Vault Key Url and vault id of the key encryption key'
        }
      },
      description: 'Encryption settings for disk or snapshot'
    },
    HardwareProfile: {
      type: 'object',
      properties: {
        vmSize: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Basic_A0',
                'Basic_A1',
                'Basic_A2',
                'Basic_A3',
                'Basic_A4',
                'Standard_A0',
                'Standard_A1',
                'Standard_A2',
                'Standard_A3',
                'Standard_A4',
                'Standard_A5',
                'Standard_A6',
                'Standard_A7',
                'Standard_A8',
                'Standard_A9',
                'Standard_A10',
                'Standard_A11',
                'Standard_A1_v2',
                'Standard_A2_v2',
                'Standard_A4_v2',
                'Standard_A8_v2',
                'Standard_A2m_v2',
                'Standard_A4m_v2',
                'Standard_A8m_v2',
                'Standard_D1',
                'Standard_D2',
                'Standard_D3',
                'Standard_D4',
                'Standard_D11',
                'Standard_D12',
                'Standard_D13',
                'Standard_D14',
                'Standard_D1_v2',
                'Standard_D2_v2',
                'Standard_D3_v2',
                'Standard_D4_v2',
                'Standard_D5_v2',
                'Standard_D11_v2',
                'Standard_D12_v2',
                'Standard_D13_v2',
                'Standard_D14_v2',
                'Standard_D15_v2',
                'Standard_DS1',
                'Standard_DS2',
                'Standard_DS3',
                'Standard_DS4',
                'Standard_DS11',
                'Standard_DS12',
                'Standard_DS13',
                'Standard_DS14',
                'Standard_DS1_v2',
                'Standard_DS2_v2',
                'Standard_DS3_v2',
                'Standard_DS4_v2',
                'Standard_DS5_v2',
                'Standard_DS11_v2',
                'Standard_DS12_v2',
                'Standard_DS13_v2',
                'Standard_DS14_v2',
                'Standard_DS15_v2',
                'Standard_F1',
                'Standard_F2',
                'Standard_F4',
                'Standard_F8',
                'Standard_F16',
                'Standard_F1s',
                'Standard_F2s',
                'Standard_F4s',
                'Standard_F8s',
                'Standard_F16s',
                'Standard_G1',
                'Standard_G2',
                'Standard_G3',
                'Standard_G4',
                'Standard_G5',
                'Standard_GS1',
                'Standard_GS2',
                'Standard_GS3',
                'Standard_GS4',
                'Standard_GS5',
                'Standard_H8',
                'Standard_H16',
                'Standard_H8m',
                'Standard_H16m',
                'Standard_H16r',
                'Standard_H16mr',
                'Standard_L4s',
                'Standard_L8s',
                'Standard_L16s',
                'Standard_L32s',
                'Standard_NC6',
                'Standard_NC12',
                'Standard_NC24',
                'Standard_NC24r',
                'Standard_NV6',
                'Standard_NV12',
                'Standard_NV24'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine size name.'
        }
      },
      description: 'Describes a hardware profile.'
    },
    ImageDataDisk: {
      type: 'object',
      properties: {
        lun: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The logical unit number.'
        },
        snapshot: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The snapshot.'
        },
        managedDisk: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The managedDisk.'
        },
        blobUri: {
          type: 'string',
          description: 'The Virtual Hard Disk.'
        },
        caching: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'None',
                'ReadOnly',
                'ReadWrite'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The caching type.'
        },
        diskSizeGB: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The initial disk size in GB for blank data disks, and the new desired size for existing OS and Data disks.'
        },
        storageAccountType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Standard_LRS',
                'Premium_LRS'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Storage Account type.'
        }
      },
      required: [
        'lun'
      ],
      description: 'Describes a data disk.'
    },
    ImageDiskReference: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'A relative uri containing either a Platform Imgage Repository or user image reference.'
        },
        lun: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'If the disk is created from an image\'s data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.'
        }
      },
      required: [
        'id'
      ],
      description: 'The source image used for creating the disk.'
    },
    ImageOSDisk: {
      type: 'object',
      properties: {
        osType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Windows',
                'Linux'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Operating System type.'
        },
        osState: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Generalized',
                'Specialized'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The OS State.'
        },
        snapshot: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The snapshot.'
        },
        managedDisk: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The managedDisk.'
        },
        blobUri: {
          type: 'string',
          description: 'The Virtual Hard Disk.'
        },
        caching: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'None',
                'ReadOnly',
                'ReadWrite'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The caching type.'
        },
        diskSizeGB: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The initial managed disk size in GB for blank data disks, and the new desired size for existing OS and Data disks.'
        },
        storageAccountType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Standard_LRS',
                'Premium_LRS'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Storage Account type.'
        }
      },
      required: [
        'osType',
        'osState'
      ],
      description: 'Describes an Operating System disk.'
    },
    ImageProperties: {
      type: 'object',
      properties: {
        sourceVirtualMachine: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The source virtual machine from which Image is created.'
        },
        storageProfile: {
          oneOf: [
            {
              $ref: '#/definitions/ImageStorageProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The storage profile.'
        }
      },
      description: 'Describes the properties of an Image.'
    },
    ImageReference: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Resource Id'
        },
        publisher: {
          type: 'string',
          description: 'The image publisher.'
        },
        offer: {
          type: 'string',
          description: 'The image offer.'
        },
        sku: {
          type: 'string',
          description: 'The image SKU.'
        },
        version: {
          type: 'string',
          description: 'The image version. The allowed formats are Major.Minor.Build or \'latest\'. Major, Minor and Build are decimal numbers. Specify \'latest\' to use the latest version of the image.'
        }
      },
      description: 'The image reference.'
    },
    ImageStorageProfile: {
      type: 'object',
      properties: {
        osDisk: {
          oneOf: [
            {
              $ref: '#/definitions/ImageOSDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The OS disk.'
        },
        dataDisks: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/ImageDataDisk'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The data disks.'
        }
      },
      required: [
        'osDisk'
      ],
      description: 'Describes a storage profile.'
    },
    InstanceViewStatus: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'The status code.'
        },
        level: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Info',
                'Warning',
                'Error'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The level code.'
        },
        displayStatus: {
          type: 'string',
          description: 'The short localizable label for the status.'
        },
        message: {
          type: 'string',
          description: 'The detailed status message, including for alerts and error messages.'
        },
        time: {
          type: 'string',
          format: 'date-time',
          description: 'The time of the status.'
        }
      },
      description: 'Instance view status.'
    },
    KeyVaultAndKeyReference: {
      type: 'object',
      properties: {
        sourceVault: {
          oneOf: [
            {
              $ref: '#/definitions/SourceVault'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource id of the KeyVault containing the key or secret'
        },
        keyUrl: {
          type: 'string',
          description: 'Url pointing to a key or secret in KeyVault'
        }
      },
      required: [
        'sourceVault',
        'keyUrl'
      ],
      description: 'Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey'
    },
    KeyVaultAndSecretReference: {
      type: 'object',
      properties: {
        sourceVault: {
          oneOf: [
            {
              $ref: '#/definitions/SourceVault'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Resource id of the KeyVault containing the key or secret'
        },
        secretUrl: {
          type: 'string',
          description: 'Url pointing to a key or secret in KeyVault'
        }
      },
      required: [
        'sourceVault',
        'secretUrl'
      ],
      description: 'Key Vault Secret Url and vault id of the encryption key '
    },
    KeyVaultKeyReference: {
      type: 'object',
      properties: {
        keyUrl: {
          type: 'string',
          description: 'The URL referencing a key in a Key Vault.'
        },
        sourceVault: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The relative URL of the Key Vault containing the key.'
        }
      },
      required: [
        'keyUrl',
        'sourceVault'
      ],
      description: 'Describes a reference to Key Vault Key'
    },
    KeyVaultSecretReference: {
      type: 'object',
      properties: {
        secretUrl: {
          type: 'string',
          description: 'The URL referencing a secret in a Key Vault.'
        },
        sourceVault: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The relative URL of the Key Vault containing the secret.'
        }
      },
      required: [
        'secretUrl',
        'sourceVault'
      ],
      description: 'Describes a reference to Key Vault Secret'
    },
    LinuxConfiguration: {
      type: 'object',
      properties: {
        disablePasswordAuthentication: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Specifies whether password authentication should be disabled.'
        },
        ssh: {
          oneOf: [
            {
              $ref: '#/definitions/SshConfiguration'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The SSH configuration for linux VMs.'
        }
      },
      description: 'Describes Windows configuration of the OS Profile.'
    },
    ManagedDiskParameters: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Resource Id'
        },
        storageAccountType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Standard_LRS',
                'Premium_LRS'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Storage Account type.'
        }
      },
      description: 'The parameters of a managed disk.'
    },
    NetworkInterfaceReference: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Resource Id'
        },
        properties: {
          oneOf: [
            // {
            //   $ref: '#/definitions/NetworkInterfaceReferenceProperties'
            // },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      description: 'Describes a network interface reference.'
    },
    NetworkInterfaceReferenceProperties: {
      type: 'object',
      properties: {
        primary: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Specifies the primary network interface in case the virtual machine has more than 1 network interface.'
        }
      },
      description: 'Describes a network interface reference properties.'
    },
    NetworkProfile: {
      type: 'object',
      properties: {
        networkInterfaces: {
          oneOf: [
            // {
            //   type: 'array',
            //   items: {
            //     $ref: '#/definitions/NetworkInterfaceReference'
            //   }
            // },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Specifies the list of resource IDs for the network interfaces associated with the virtual machine.'
        }
      },
      description: 'Describes a network profile.'
    },
    OSDisk: {
      type: 'object',
      properties: {
        osType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Windows',
                'Linux'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Operating System type.'
        },
        encryptionSettings: {
          oneOf: [
            {
              $ref: '#/definitions/DiskEncryptionSettings'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The disk encryption settings.'
        },
        name: {
          type: 'string',
          description: 'The disk name.'
        },
        vhd: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualHardDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual hard disk.'
        },
        image: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualHardDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The source user image virtual hard disk. The virtual hard disk will be copied before using it to attach to the virtual machine. If SourceImage is provided, the destination virtual hard disk must not exist.'
        },
        caching: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'None',
                'ReadOnly',
                'ReadWrite'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The caching type.'
        },
        createOption: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'FromImage',
                'Empty',
                'Attach'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The create option.'
        },
        diskSizeGB: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The initial disk size, in GB, for blank data disks, and the new desired size for resizing existing OS and data disks.'
        },
        managedDisk: {
          oneOf: [
            {
              $ref: '#/definitions/ManagedDiskParameters'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The managed disk parameters.'
        }
      },
      required: [
        'createOption'
      ],
      description: 'Describes an Operating System disk.'
    },
    OSProfile: {
      type: 'object',
      properties: {
        computerName: {
          type: 'string',
          description: 'Specifies the host OS name of the virtual machine.'
        },
        adminUsername: {
          type: 'string',
          description: 'Specifies the name of the administrator account.'
        },
        adminPassword: {
          type: 'string',
          description: 'Specifies the password of the administrator account.'
        },
        customData: {
          type: 'string',
          description: 'Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes'
        },
        windowsConfiguration: {
          oneOf: [
            {
              $ref: '#/definitions/WindowsConfiguration'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Windows configuration of the OS profile.'
        },
        linuxConfiguration: {
          oneOf: [
            {
              $ref: '#/definitions/LinuxConfiguration'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Linux configuration of the OS profile.'
        },
        secrets: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/VaultSecretGroup'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The list of certificates for addition to the VM.'
        }
      },
      description: 'Describes an OS profile.'
    },
    Plan: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The plan ID.'
        },
        publisher: {
          type: 'string',
          description: 'The publisher ID.'
        },
        product: {
          type: 'string',
          description: 'The offer ID.'
        },
        promotionCode: {
          type: 'string',
          description: 'The promotion code.'
        }
      },
      description: 'Plan for the resource.'
    },
    Sku: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The sku name.'
        },
        tier: {
          type: 'string',
          description: 'The sku tier.'
        },
        capacity: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The sku capacity.'
        }
      },
      description: 'Describes a virtual machine scale set sku.'
    },
    SourceVault: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Resource Id'
        }
      },
      description: 'The vault id is an Azure Resource Manager Resoure id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}'
    },
    SshConfiguration: {
      type: 'object',
      properties: {
        publicKeys: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/SshPublicKey'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The list of SSH public keys used to authenticate with linux based VMs.'
        }
      },
      description: 'SSH configuration for Linux based VMs running on Azure'
    },
    SshPublicKey: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          description: 'Specifies the full path on the created VM where SSH public key is stored. If the file already exists, the specified key is appended to the file.'
        },
        keyData: {
          type: 'string',
          description: 'Certificate public key used to authenticate to the VM through SSH. The certificate must be in Pem format with or without headers.'
        }
      },
      description: 'Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.'
    },
    StorageProfile: {
      type: 'object',
      properties: {
        imageReference: {
          oneOf: [
            {
              $ref: '#/definitions/ImageReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The image reference.'
        },
        osDisk: {
          oneOf: [
            {
              $ref: '#/definitions/OSDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The OS disk.'
        },
        dataDisks: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/DataDisk'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The data disks.'
        }
      },
      description: 'Describes a storage profile.'
    },
    SubResource: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Resource Id'
        }
      }
    },
    UpgradePolicy: {
      type: 'object',
      properties: {
        mode: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Automatic',
                'Manual'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The upgrade mode.'
        }
      },
      description: 'Describes an upgrade policy - automatic or manual.'
    },
    VaultCertificate: {
      type: 'object',
      properties: {
        certificateUrl: {
          type: 'string',
          description: 'The URL referencing a secret in a Key Vault which contains a properly formatted certificate.'
        },
        certificateStore: {
          type: 'string',
          description: 'The Certificate store in LocalMachine to add the certificate to on Windows, leave empty on Linux.'
        }
      },
      description: 'Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.'
    },
    VaultSecretGroup: {
      type: 'object',
      properties: {
        sourceVault: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Relative URL of the Key Vault containing all of the certificates in VaultCertificates.'
        },
        vaultCertificates: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/VaultCertificate'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The list of key vault references in SourceVault which contain certificates.'
        }
      },
      description: 'Describes a set of certificates which are all in the same Key Vault.'
    },
    VirtualHardDisk: {
      type: 'object',
      properties: {
        uri: {
          type: 'string',
          description: 'The virtual hard disk\'s URI. Must be a valid URI to a virtual hard disk.'
        }
      },
      description: 'Describes the uri of a disk.'
    },
    VirtualMachineExtensionInstanceView: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The virtual machine extension name.'
        },
        type: {
          type: 'string',
          description: 'The full type of the extension handler which includes both publisher and type.'
        },
        typeHandlerVersion: {
          type: 'string',
          description: 'The type version of the extension handler.'
        },
        substatuses: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/InstanceViewStatus'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The resource status information.'
        },
        statuses: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/InstanceViewStatus'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The resource status information.'
        }
      },
      description: 'The instance view of a virtual machine extension.'
    },
    VirtualMachineExtensionProperties: {
      type: 'object',
      properties: {
        forceUpdateTag: {
          type: 'string',
          description: 'How the extension handler should be forced to update even if the extension configuration has not changed.'
        },
        publisher: {
          type: 'string',
          description: 'The name of the extension handler publisher.'
        },
        type: {
          type: 'string',
          description: 'The type of the extension handler.'
        },
        typeHandlerVersion: {
          type: 'string',
          description: 'The type version of the extension handler.'
        },
        autoUpgradeMinorVersion: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Whether the extension handler should be automatically upgraded across minor versions.'
        },
        settings: {
          description: 'Json formatted public settings for the extension.'
        },
        protectedSettings: {
          description: 'Json formatted protected settings for the extension.'
        },
        instanceView: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineExtensionInstanceView'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine extension instance view.'
        }
      },
      description: 'Describes the properties of a Virtual Machine Extension.'
    },
    VirtualMachineIdentity: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: [
            'SystemAssigned'
          ],
          description: 'The type of identity used for the virtual machine. Currently, the only supported type is \'SystemAssigned\', which implicitly creates an identity.'
        }
      },
      description: 'Identity for the virtual machine.'
    },
    VirtualMachineProperties: {
      type: 'object',
      properties: {
        hardwareProfile: {
          oneOf: [
            {
              $ref: '#/definitions/HardwareProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The hardware profile.'
        },
        storageProfile: {
          oneOf: [
            {
              $ref: '#/definitions/StorageProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The storage profile.'
        },
        osProfile: {
          oneOf: [
            {
              $ref: '#/definitions/OSProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The OS profile.'
        },
        networkProfile: {
          oneOf: [
            {
              $ref: '#/definitions/NetworkProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The network profile.'
        },
        diagnosticsProfile: {
          oneOf: [
            {
              $ref: '#/definitions/DiagnosticsProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The diagnostics profile.'
        },
        availabilitySet: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The reference Id of the availability set to which the virtual machine belongs.'
        },
        licenseType: {
          type: 'string',
          description: 'Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system.'
        }
      },
      description: 'Describes the properties of a Virtual Machine.'
    },
    VirtualMachineScaleSetDataDisk: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The disk name.'
        },
        lun: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The logical unit number.'
        },
        caching: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'None',
                'ReadOnly',
                'ReadWrite'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The caching type.'
        },
        createOption: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'FromImage',
                'Empty',
                'Attach'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The create option.'
        },
        diskSizeGB: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The initial disk size in GB for blank data disks, and the new desired size for existing OS and Data disks.'
        },
        managedDisk: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetManagedDiskParameters'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The managed disk parameters.'
        }
      },
      required: [
        'lun',
        'createOption'
      ],
      description: 'Describes a virtual machine scale set data disk.'
    },
    VirtualMachineScaleSetExtension: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the extension.'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetExtensionProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      description: 'Describes a Virtual Machine Scale Set Extension.'
    },
    VirtualMachineScaleSetExtensionProfile: {
      type: 'object',
      properties: {
        extensions: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/VirtualMachineScaleSetExtension'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set child extension resources.'
        }
      },
      description: 'Describes a virtual machine scale set extension profile.'
    },
    VirtualMachineScaleSetExtensionProperties: {
      type: 'object',
      properties: {
        forceUpdateTag: {
          type: 'string',
          description: 'If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.'
        },
        publisher: {
          type: 'string',
          description: 'The name of the extension handler publisher.'
        },
        type: {
          type: 'string',
          description: 'The type of the extension handler.'
        },
        typeHandlerVersion: {
          type: 'string',
          description: 'The type version of the extension handler.'
        },
        autoUpgradeMinorVersion: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Whether the extension handler should be automatically upgraded across minor versions.'
        },
        settings: {
          description: 'Json formatted public settings for the extension.'
        },
        protectedSettings: {
          description: 'Json formatted protected settings for the extension.'
        }
      },
      description: 'Describes the properties of a Virtual Machine Scale Set Extension.'
    },
    VirtualMachineScaleSetIdentity: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          enum: [
            'SystemAssigned'
          ],
          description: 'The type of identity used for the virtual machine scale set. Currently, the only supported type is \'SystemAssigned\', which implicitly creates an identity.'
        }
      },
      description: 'Identity for the virtual machine scale set.'
    },
    VirtualMachineScaleSetIPConfiguration: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Resource Id'
        },
        name: {
          type: 'string',
          description: 'The IP configuration name.'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetIPConfigurationProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      required: [
        'name'
      ],
      description: 'Describes a virtual machine scale set network profile\'s IP configuration.'
    },
    VirtualMachineScaleSetIPConfigurationProperties: {
      type: 'object',
      properties: {
        subnet: {
          oneOf: [
            {
              $ref: '#/definitions/ApiEntityReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The subnet.'
        },
        primary: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Specifies the primary IP Configuration in case the network interface has more than one IP Configuration.'
        },
        publicIPAddressConfiguration: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetPublicIPAddressConfiguration'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The publicIPAddressConfiguration.'
        },
        privateIPAddressVersion: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'IPv4',
                'IPv6'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: \'IPv4\' and \'IPv6\'.'
        },
        applicationGatewayBackendAddressPools: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/SubResource'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The application gateway backend address pools.'
        },
        loadBalancerBackendAddressPools: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/SubResource'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The load balancer backend address pools.'
        },
        loadBalancerInboundNatPools: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/SubResource'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The load balancer inbound nat pools.'
        }
      },
      description: 'Describes a virtual machine scale set network profile\'s IP configuration properties.'
    },
    VirtualMachineScaleSetManagedDiskParameters: {
      type: 'object',
      properties: {
        storageAccountType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Standard_LRS',
                'Premium_LRS'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Storage Account type.'
        }
      },
      description: 'Describes the parameters of a ScaleSet managed disk.'
    },
    VirtualMachineScaleSetNetworkConfiguration: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Resource Id'
        },
        name: {
          type: 'string',
          description: 'The network configuration name.'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetNetworkConfigurationProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      required: [
        'name'
      ],
      description: 'Describes a virtual machine scale set network profile\'s network configurations.'
    },
    VirtualMachineScaleSetNetworkConfigurationDnsSettings: {
      type: 'object',
      properties: {
        dnsServers: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'List of DNS servers IP addresses'
        }
      },
      description: 'Describes a virtual machines scale sets network configuration\'s DNS settings.'
    },
    VirtualMachineScaleSetNetworkConfigurationProperties: {
      type: 'object',
      properties: {
        primary: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Whether this is a primary NIC on a virtual machine.'
        },
        enableAcceleratedNetworking: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Specifies whether the network interface is accelerated networking-enabled.'
        },
        networkSecurityGroup: {
          oneOf: [
            {
              $ref: '#/definitions/SubResource'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The network security group.'
        },
        dnsSettings: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetNetworkConfigurationDnsSettings'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The dns settings to be applied on the network interfaces.'
        },
        ipConfigurations: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/VirtualMachineScaleSetIPConfiguration'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set IP Configuration.'
        }
      },
      required: [
        'ipConfigurations'
      ],
      description: 'Describes a virtual machine scale set network profile\'s IP configuration.'
    },
    VirtualMachineScaleSetNetworkProfile: {
      type: 'object',
      properties: {
        networkInterfaceConfigurations: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/VirtualMachineScaleSetNetworkConfiguration'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The list of network configurations.'
        }
      },
      description: 'Describes a virtual machine scale set network profile.'
    },
    VirtualMachineScaleSetOSDisk: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The disk name.'
        },
        caching: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'None',
                'ReadOnly',
                'ReadWrite'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The caching type.'
        },
        createOption: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'FromImage',
                'Empty',
                'Attach'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The create option.'
        },
        osType: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Windows',
                'Linux'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Operating System type.'
        },
        image: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualHardDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Source User Image VirtualHardDisk. This VirtualHardDisk will be copied before using it to attach to the Virtual Machine. If SourceImage is provided, the destination VirtualHardDisk should not exist.'
        },
        vhdContainers: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The list of virtual hard disk container uris.'
        },
        managedDisk: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetManagedDiskParameters'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The managed disk parameters.'
        }
      },
      required: [
        'createOption'
      ],
      description: 'Describes a virtual machine scale set operating system disk.'
    },
    VirtualMachineScaleSetOSProfile: {
      type: 'object',
      properties: {
        computerNamePrefix: {
          type: 'string',
          description: 'The computer name prefix.'
        },
        adminUsername: {
          type: 'string',
          description: 'The admin user name.'
        },
        adminPassword: {
          type: 'string',
          description: 'The admin user password.'
        },
        customData: {
          type: 'string',
          description: 'A base-64 encoded string of custom data.'
        },
        windowsConfiguration: {
          oneOf: [
            {
              $ref: '#/definitions/WindowsConfiguration'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Windows Configuration of the OS profile.'
        },
        linuxConfiguration: {
          oneOf: [
            {
              $ref: '#/definitions/LinuxConfiguration'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Linux Configuration of the OS profile.'
        },
        secrets: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/VaultSecretGroup'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The List of certificates for addition to the VM.'
        }
      },
      description: 'Describes a virtual machine scale set OS profile.'
    },
    VirtualMachineScaleSetProperties: {
      type: 'object',
      properties: {
        upgradePolicy: {
          oneOf: [
            {
              $ref: '#/definitions/UpgradePolicy'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The upgrade policy.'
        },
        virtualMachineProfile: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetVMProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine profile.'
        },
        overprovision: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Specifies whether the Virtual Machine Scale Set should be overprovisioned.'
        },
        singlePlacementGroup: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'When true this limits the scale set to a single placement group, of max size 100 virtual machines.'
        }
      },
      description: 'Describes the properties of a Virtual Machine Scale Set.'
    },
    VirtualMachineScaleSetPublicIPAddressConfiguration: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The publicIP address configuration name.'
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetPublicIPAddressConfigurationProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      required: [
        'name'
      ],
      description: 'Describes a virtual machines scale set IP Configuration\'s PublicIPAddress configuration'
    },
    VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings: {
      type: 'object',
      properties: {
        domainNameLabel: {
          type: 'string',
          description: 'The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created'
        }
      },
      required: [
        'domainNameLabel'
      ],
      description: 'Describes a virtual machines scale sets network configuration\'s DNS settings.'
    },
    VirtualMachineScaleSetPublicIPAddressConfigurationProperties: {
      type: 'object',
      properties: {
        idleTimeoutInMinutes: {
          oneOf: [
            {
              type: 'integer'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The idle timeout of the public IP address.'
        },
        dnsSettings: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The dns settings to be applied on the publicIP addresses .'
        }
      },
      description: 'Describes a virtual machines scale set IP Configuration\'s PublicIPAddress configuration'
    },
    virtualMachineScaleSets_extensions_childResource: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        type: {
          type: 'string',
          enum: [
            'extensions'
          ]
        },
        apiVersion: {
          oneOf: [
            {
              type: 'string',
              enum: [
                '2017-03-30'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        },
        properties: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetExtensionProperties'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ]
        }
      },
      required: [
        'name',
        'type',
        'apiVersion',
        'properties'
      ],
      description: 'Microsoft.Compute/virtualMachineScaleSets/extensions'
    },
    VirtualMachineScaleSetStorageProfile: {
      type: 'object',
      properties: {
        imageReference: {
          oneOf: [
            {
              $ref: '#/definitions/ImageReference'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The image reference.'
        },
        osDisk: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetOSDisk'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The OS disk.'
        },
        dataDisks: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/VirtualMachineScaleSetDataDisk'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The data disks.'
        }
      },
      description: 'Describes a virtual machine scale set storage profile.'
    },
    VirtualMachineScaleSetVMProfile: {
      type: 'object',
      properties: {
        osProfile: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetOSProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set OS profile.'
        },
        storageProfile: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetStorageProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set storage profile.'
        },
        networkProfile: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetNetworkProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set network profile.'
        },
        diagnosticsProfile: {
          oneOf: [
            {
              $ref: '#/definitions/DiagnosticsProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set diagnostics profile.'
        },
        extensionProfile: {
          oneOf: [
            {
              $ref: '#/definitions/VirtualMachineScaleSetExtensionProfile'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The virtual machine scale set extension profile.'
        },
        licenseType: {
          type: 'string',
          description: 'The license type, which is for bring your own license scenario.'
        }
      },
      description: 'Describes a virtual machine scale set virtual machine profile.'
    },
    WindowsConfiguration: {
      type: 'object',
      properties: {
        provisionVMAgent: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Indicates whether the virtual machine agent should be provisioned on the Virtual Machine. If not specified, then the default behavior is to set it to true.'
        },
        enableAutomaticUpdates: {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Indicates whether Windows updates are automatically installed on the VM.'
        },
        timeZone: {
          type: 'string',
          description: 'The time zone of the VM'
        },
        additionalUnattendContent: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/AdditionalUnattendContent'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'Additional base-64 encoded XML formatted information that can be included in the Unattend.xml file.'
        },
        winRM: {
          oneOf: [
            {
              $ref: '#/definitions/WinRMConfiguration'
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Windows Remote Management configuration of the VM'
        }
      },
      description: 'Describes Windows Configuration of the OS Profile.'
    },
    WinRMConfiguration: {
      type: 'object',
      properties: {
        listeners: {
          oneOf: [
            {
              type: 'array',
              items: {
                $ref: '#/definitions/WinRMListener'
              }
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The list of Windows Remote Management listeners'
        }
      },
      description: 'Describes Windows Remote Management configuration of the VM'
    },
    WinRMListener: {
      type: 'object',
      properties: {
        protocol: {
          oneOf: [
            {
              type: 'string',
              enum: [
                'Http',
                'Https'
              ]
            },
            {
              $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression'
            }
          ],
          description: 'The Protocol used by the WinRM listener. Http and Https are supported.'
        },
        certificateUrl: {
          type: 'string',
          description: 'The Certificate URL in KMS for Https listeners. Should be null for Http listeners.'
        }
      },
      description: 'Describes Protocol and thumbprint of Windows Remote Management listener'
    },
    genericExtension: {
      type: 'object',
      properties: {
        publisher: {
          type: 'string',
          minLength: 1,
          description: 'Microsoft.Compute/extensions - Publisher'
        },
        type: {
          type: 'string',
          minLength: 1,
          description: 'Microsoft.Compute/extensions - Type'
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1,
          description: 'Microsoft.Compute/extensions - Type handler version'
        },
        settings: {
          oneOf: [
            { type: 'object' },
            { $ref: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#/definitions/expression' }
          ],
          description: 'Microsoft.Compute/extensions - Settings'
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'settings'
      ]
    },
    iaaSDiagnostics: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.Diagnostics'
          ]
        },
        type: {
          enum: [
            'IaaSDiagnostics'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            xmlCfg: {
              type: 'string'
            },
            StorageAccount: {
              type: 'string'
            }
          },
          required: [
            'xmlCfg',
            'StorageAccount'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            storageAccountName: {
              type: 'string'
            },
            storageAccountKey: {
              type: 'string'
            },
            storageAccountEndPoint: {
              type: 'string'
            }
          },
          required: [
            'storageAccountName',
            'storageAccountKey',
            'storageAccountEndPoint'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    iaaSAntimalware: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.Security'
          ]
        },
        type: {
          enum: [
            'IaaSAntimalware'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            AntimalwareEnabled: {
              type: 'boolean'
            },
            Exclusions: {
              type: 'object',
              properties: {
                Paths: {
                  type: 'string'
                },
                Extensions: {
                  type: 'string'
                },
                Processes: {
                  type: 'string'
                }
              },
              required: [
                'Paths',
                'Extensions',
                'Processes'
              ]
            },
            RealtimeProtectionEnabled: {
              enum: [
                'true',
                'false'
              ]
            },
            ScheduledScanSettings: {
              type: 'object',
              properties: {
                isEnabled: {
                  enum: [
                    'true',
                    'false'
                  ]
                },
                scanType: {
                  type: 'string'
                },
                day: {
                  type: 'string'
                },
                time: {
                  type: 'string'
                }
              },
              required: [
                'isEnabled',
                'scanType',
                'day',
                'time'
              ]
            }
          },
          required: [
            'AntimalwareEnabled',
            'Exclusions',
            'RealtimeProtectionEnabled',
            'ScheduledScanSettings'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    customScriptExtension: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Compute'
          ]
        },
        type: {
          enum: [
            'CustomScriptExtension'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            fileUris: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            commandToExecute: {
              type: 'string'
            }
          },
          required: [
            'commandToExecute'
          ]
      },
      protectedSettings: {
          type: 'object',
          properties: {
            storageAccountName: {
              type: 'string'
            },
            storageAccountKey: {
              type: 'string'
            }
          }
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    customScriptForLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.OSTCExtensions'
          ]
        },
        type: {
          enum: [
            'CustomScriptForLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            fileUris: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            commandToExecute: {
              type: 'string'
            },
            storageAccountName: {
              type: 'string'
            },
            storageAccountKey: {
              type: 'string'
            }
          },
          required: [
            'commandToExecute'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    linuxDiagnostic: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.OSTCExtensions'
          ]
        },
        type: {
          enum: [
            'LinuxDiagnostic'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            enableSyslog: {
              type: 'string'
            },
            mdsdHttpProxy: {
              type: 'string'
            },
            perCfg: {
              type: 'array'
            },
            fileCfg: {
              type: 'array'
            },
            xmlCfg: {
              type: 'string'
            },
            ladCfg: {
              type: 'object'
            },
            syslogCfg: {
              type: 'string'
            },
            eventVolume: {
              type: 'string'
            },
            mdsdCfg: {
              type: 'string'
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            mdsdHttpProxy: {
              type: 'string'
            },
            storageAccountName: {
              type: 'string'
            },
            storageAccountKey: {
              type: 'string'
            },
            storageAccountEndPoint: {
              type: 'string'
            }
          },
          required: [
            'storageAccountName',
            'storageAccountKey'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    vmAccessForLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.OSTCExtensions'
          ]
        },
        type: {
          enum: [
            'VMAccessForLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            check_disk: {
              type: 'boolean'
            },
            repair_disk: {
              type: 'boolean'
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            username: {
              type: 'string'
            },
            password: {
              type: 'string'
            },
            ssh_key: {
              type: 'string'
            },
            reset_ssh: {
              type: 'string'
            },
            remove_user: {
              type: 'string'
            },
            expiration: {
              type: 'string'
            }
          },
          required: [
            'username',
            'password',
            'ssh_key',
            'reset_ssh',
            'remove_user',
            'expiration'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    bgInfo: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Compute'
          ]
        },
        type: {
          enum: [
            'bginfo'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion'
      ]
    },
    vmAccessAgent: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Compute'
          ]
        },
        type: {
          enum: [
            'VMAccessAgent'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            username: {
              type: 'string'
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            password: {
              type: 'string'
            }
          }
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    dscExtension: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Powershell'
          ]
        },
        type: {
          enum: [
            'DSC'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            modulesUrl: {
              type: 'string'
            },
            configurationFunction: {
              type: 'string'
            },
            properties: {
              type: 'string'
            },
            wmfVersion: {
              type: 'string'
            },
            privacy: {
              type: 'object',
              properties: {
                dataCollection: {
                  type: 'string'
                }
              }
            }
          },
          required: [
            'modulesUrl',
            'configurationFunction'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            dataBlobUri: {
              type: 'string'
            }
          }
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    acronisBackupLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Acronis.Backup'
          ]
        },
        type: {
          enum: [
            'AcronisBackupLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            absURL: {
              type: 'string'
            }
          },
          required: [
            'absURL'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            userLogin: {
              type: 'string'
            },
            userPassword: {
              type: 'string'
            }
          },
          required: [
            'userLogin',
            'userPassword'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    acronisBackup: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Acronis.Backup'
          ]
        },
        type: {
          enum: [
            'AcronisBackup'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            absURL: {
              type: 'string'
            }
          },
          required: [
            'absURL'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            userLogin: {
              type: 'string'
            },
            userPassword: {
              type: 'string'
            }
          },
          required: [
            'userLogin',
            'userPassword'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    linuxChefClient: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Chef.Bootstrap.WindowsAzure'
          ]
        },
        type: {
          enum: [
            'LinuxChefClient'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            bootstrap_version: {
              type: 'string'
            },
            bootstrap_options: {
              type: 'object',
              properties: {
                chef_node_name: {
                  type: 'string'
                },
                chef_server_url: {
                  type: 'string'
                },
                validation_client_name: {
                  type: 'string'
                },
                node_ssl_verify_mode: {
                  type: 'string'
                },
                environment: {
                  type: 'string'
                }
              },
              required: [
                'chef_node_name',
                'chef_server_url',
                'validation_client_name',
                'node_ssl_verify_mode',
                'environment'
              ]
            },
            runlist: {
              type: 'string'
            },
            client_rb: {
              type: 'string'
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            validation_key: {
              type: 'string'
            },
            chef_server_crt: {
              type: 'string'
            },
            secret: {
              type: 'string'
            }
          },
          required: [
            'validation_key',
            'chef_server_crt',
            'secret'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    chefClient: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Chef.Bootstrap.WindowsAzure'
          ]
        },
        type: {
          enum: [
            'ChefClient'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            bootstrap_options: {
              type: 'object',
              properties: {
                chef_node_name: {
                  type: 'string'
                },
                chef_server_url: {
                  type: 'string'
                },
                validation_client_name: {
                  type: 'string'
                },
                node_ssl_verify_mode: {
                  type: 'string'
                },
                environment: {
                  type: 'string'
                }
              },
              required: [
                'chef_node_name',
                'chef_server_url',
                'validation_client_name',
                'node_ssl_verify_mode',
                'environment'
              ]
            },
            runlist: {
              type: 'string'
            },
            client_rb: {
              type: 'string'
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            validation_key: {
              type: 'string'
            },
            chef_server_crt: {
              type: 'string'
            },
            secret: {
              type: 'string'
            }
          },
          required: [
            'validation_key',
            'chef_server_crt',
            'secret'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    datadogLinuxAgent: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Datadog.Agent'
          ]
        },
        type: {
          enum: [
            'DatadogLinuxAgent'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            api_key: {
              type: 'string'
            }
          },
          required: [
            'api_key'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    datadogWindowsAgent: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Datadog.Agent'
          ]
        },
        type: {
          enum: [
            'DatadogWindowsAgent'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            api_key: {
              type: 'string'
            }
          },
          required: [
            'api_key'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    dockerExtension: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.Extensions'
          ]
        },
        type: {
          enum: [
            'DockerExtension'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            docker: {
              type: 'object',
              properties: {
                port: {
                  type: 'string'
                }
              },
              required: [
                'port'
              ]
            }
          },
          required: [
            'docker'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            certs: {
              type: 'object',
              properties: {
                ca: {
                  type: 'string'
                },
                cert: {
                  type: 'string'
                },
                key: {
                  type: 'string'
                }
              },
              required: [
                'ca',
                'cert',
                'key'
              ]
            }
          },
          required: [
            'certs'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    dynatraceLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'dynatrace.ruxit'
          ]
        },
        type: {
          enum: [
            'ruxitAgentLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            tenantId: {
              type: 'string'
            },
            token: {
              type: 'string'
            }
          },
          required: [
            'tenantId',
            'token'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    dynatraceWindows: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'dynatrace.ruxit'
          ]
        },
        type: {
          enum: [
            'ruxitAgentWindows'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            tenantId: {
              type: 'string'
            },
            token: {
              type: 'string'
            }
          },
          required: [
            'tenantId',
            'token'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    eset: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'ESET'
          ]
        },
        type: {
          enum: [
            'FileSecurity'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            'LicenseKey': {
              type: 'string'
            },
            'Install-RealtimeProtection': {
              type: 'boolean'
            },
            'Install-ProtocolFiltering': {
              type: 'boolean'
            },
            'Install-DeviceControl': {
              type: 'boolean'
            },
            'Enable-Cloud': {
              type: 'boolean'
            },
            'Enable-PUA': {
              type: 'boolean'
            },
            'ERAAgentCfgUrl': {
              type: 'string'
            }
          },
          required: [
            'LicenseKey',
            'Install-RealtimeProtection',
            'Install-ProtocolFiltering',
            'Install-DeviceControl',
            'Enable-Cloud',
            'Enable-PUA',
            'ERAAgentCfgUrl'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    hpeSecurityApplicationDefender: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'HPE.Security.ApplicationDefender'
          ]
        },
        type: {
          enum: [
            'DotnetAgent'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        protectedSettings: {
          type: 'object',
          properties: {
            key: {
              type: 'string'
            },
            serverURL: {
              type: 'string'
            }
          },
          required: [
            'key',
            'serverURL'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'protectedSettings'
      ]
    },
    puppetAgent: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Puppet'
          ]
        },
        type: {
          enum: [
            'PuppetAgent'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        protectedSettings: {
          type: 'object',
          properties: {
            PUPPET_MASTER_SERVER: {
              type: 'string'
            }
          },
          required: [
            'PUPPET_MASTER_SERVER'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'protectedSettings'
      ]
    },
    site24x7LinuxServerExtn: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Site24x7'
          ]
        },
        type: {
          enum: [
            'Site24x7LinuxServerExtn'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            site24x7AgentType: {
              enum: [
                'azurevmextnlinuxserver'
              ]
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            site24x7LicenseKey: {
              type: 'string'
            }
          },
          required: [
            'site24x7LicenseKey'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    site24x7WindowsServerExtn: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Site24x7'
          ]
        },
        type: {
          enum: [
            'Site24x7WindowsServerExtn'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            site24x7AgentType: {
              enum: [
                'azurevmextnwindowsserver'
              ]
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            site24x7LicenseKey: {
              type: 'string'
            }
          },
          required: [
            'site24x7LicenseKey'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    site24x7ApmInsightExtn: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Site24x7'
          ]
        },
        type: {
          enum: [
            'Site24x7ApmInsightExtn'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            site24x7AgentType: {
              enum: [
                'azurevmextnapminsightclassic'
              ]
            }
          }
        },
        protectedSettings: {
          type: 'object',
          properties: {
            site24x7LicenseKey: {
              type: 'string'
            }
          },
          required: [
            'site24x7LicenseKey'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    trendMicroDSALinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'TrendMicro.DeepSecurity'
          ]
        },
        type: {
          enum: [
            'TrendMicroDSALinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            DSMname: {
              type: 'string'
            },
            DSMport: {
              type: 'string'
            },
            policyNameorID: {
              type: 'string'
            }
          },
          required: [
            'DSMname',
            'DSMport'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            tenantID: {
              type: 'string'
            },
            tenantPassword: {
              type: 'string'
            }
          },
          required: [
            'tenantID',
            'tenantPassword'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    trendMicroDSA: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'TrendMicro.DeepSecurity'
          ]
        },
        type: {
          enum: [
            'TrendMicroDSA'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            DSMname: {
              type: 'string'
            },
            DSMport: {
              type: 'string'
            },
            policyNameorID: {
              type: 'string'
            }
          },
          required: [
            'DSMname',
            'DSMport'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            tenantID: {
              type: 'string'
            },
            tenantPassword: {
              type: 'string'
            }
          },
          required: [
            'tenantID',
            'tenantPassword'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    bmcCtmAgentLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'ctm.bmc.com'
          ]
        },
        type: {
          enum: [
            'BmcCtmAgentLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            'Control-M Server Name': {
              type: 'string'
            },
            'Agent Port': {
              type: 'string'
            },
            'Host Group': {
              type: 'string'
            },
            'User Account': {
              type: 'string'
            }
          },
          required: [
            'Control-M Server Name',
            'Agent Port',
            'Host Group',
            'User Account'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    bmcCtmAgentWindows: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'bmc.ctm'
          ]
        },
        type: {
          enum: [
            'AgentWinExt'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            'Control-M Server Name': {
              type: 'string'
            },
            'Agent Port': {
              type: 'string'
            },
            'Host Group': {
              type: 'string'
            }
          },
          required: [
            'Control-M Server Name',
            'Agent Port',
            'Host Group'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    OSPatchingForLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.OSTCExtensions'
          ]
        },
        type: {
          enum: [
            'OSPatchingForLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            disabled: {
              type: 'boolean'
            },
            stop: {
              type: 'boolean'
            },
            installDuration: {
              type: 'string'
            },
            intervalOfWeeks: {
              type: 'number'
            },
            dayOfWeek: {
              type: 'string'
            },
            startTime: {
              type: 'string'
            },
            rebootAfterPatch: {
              type: 'string'
            },
            category: {
              type: 'string'
            },
            oneoff: {
              type: 'boolean'
            },
            local: {
              type: 'boolean'
            },
            idleTestScript: {
              type: 'string'
            },
            healthyTestScript: {
              type: 'string'
            },
            distUpgradeList: {
              type: 'string'
            },
            distUpgradeAll: {
              type: 'boolean'
            },
            vmStatusTest: {
              type: 'object'
            }
          },
          required: [
            'disabled',
            'stop'
          ]
        },
        protectedSettings: {
          type: 'object',
          properties: {
            storageAccountName: {
              type: 'string'
            },
            storageAccountKey: {
              type: 'string'
            }
          }
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    VMSnapshot: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.RecoveryServices'
          ]
        },
        type: {
          enum: [
            'VMSnapshot'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            locale: {
              type: 'string'
            },
            taskId: {
              type: 'string'
            },
            commandToExecute: {
              type: 'string'
            },
            objectStr: {
              type: 'string'
            },
            logsBlobUri: {
              type: 'string'
            },
            statusBlobUri: {
              type: 'string'
            },
            commandStartTimeUTCTicks: {
              type: 'string'
            },
            vmType: {
              type: 'string'
            }
          },
          required: [
            'locale',
            'taskId',
            'commandToExecute',
            'objectStr',
            'logsBlobUri',
            'statusBlobUri',
            'commandStartTimeUTCTicks',
            'vmType'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    VMSnapshotLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.RecoveryServices'
          ]
        },
        type: {
          enum: [
            'VMSnapshotLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            locale: {
              type: 'string'
            },
            taskId: {
              type: 'string'
            },
            commandToExecute: {
              type: 'string'
            },
            objectStr: {
              type: 'string'
            },
            logsBlobUri: {
              type: 'string'
            },
            statusBlobUri: {
              type: 'string'
            },
            commandStartTimeUTCTicks: {
              type: 'string'
            },
            vmType: {
              type: 'string'
            }
          },
          required: [
            'locale',
            'taskId',
            'commandToExecute',
            'objectStr',
            'logsBlobUri',
            'statusBlobUri',
            'commandStartTimeUTCTicks',
            'vmType'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings'
      ]
    },
    customScript: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.Extensions'
          ]
        },
        type: {
          enum: [
            'CustomScript'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        },
        settings: {
          type: 'object',
          properties: {
            fileUris: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          },
          required: [
            'fileUris'
          ]
      },
      protectedSettings: {
          type: 'object',
          properties: {
            storageAccountName: {
              type: 'string'
            },
            storageAccountKey: {
              type: 'string'
            },
            commandToExecute: {
              type: 'string'
            }
          },
          required: [
            'storageAccountName',
            'storageAccountKey',
            'commandToExecute'
          ]
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion',
        'settings',
        'protectedSettings'
      ]
    },
    networkWatcherAgentWindows: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.NetworkWatcher'
          ]
        },
        type: {
          enum: [
            'NetworkWatcherAgentWindows'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion'
      ]
    },
    networkWatcherAgentLinux: {
      type: 'object',
      properties: {
        publisher: {
          enum: [
            'Microsoft.Azure.NetworkWatcher'
          ]
        },
        type: {
          enum: [
            'NetworkWatcherAgentLinux'
          ]
        },
        typeHandlerVersion: {
          type: 'string',
          minLength: 1
        },
        autoUpgradeMinorVersion: {
          type: 'boolean'
        }
      },
      required: [
        'publisher',
        'type',
        'typeHandlerVersion',
        'autoUpgradeMinorVersion'
      ]
    }
  }
};
