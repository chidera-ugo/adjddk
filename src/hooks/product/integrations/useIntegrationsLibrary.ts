import {
  IntegrationLibraryItem,
  integrationsLibrary,
} from '@/constants/integrations_library';

export const useIntegrationsLibrary = () => {
  const tabs = [
    { name: 'all', value: 'all' },
    ...Object.keys(integrationsLibrary).map((group) => ({
      name: group,
      value: group,
    })),
  ];

  function getIntegrations(group: string) {
    const library: IntegrationLibraryItem[] = [];

    if (group === 'all') {
      for (const group in integrationsLibrary) {
        library.push(...integrationsLibrary[group]);
      }

      return library;
    }

    return integrationsLibrary[group] ?? [];
  }

  return {
    tabs,
    getIntegrations,
  };
};
