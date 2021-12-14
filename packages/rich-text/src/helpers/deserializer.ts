import {
  getPlatePluginOptions,
  PlateEditor,
  Deserialize,
  GetNodeDeserializerRule,
  getLeafDeserializer,
  getElementDeserializer,
} from '@udecode/plate';

export function deserializeLeaf(type: string, rules: GetNodeDeserializerRule[]): Deserialize {
  return function (editor: PlateEditor) {
    const pluginOptions = getPlatePluginOptions(editor, type);

    return {
      leaf: getLeafDeserializer({
        type,
        rules,
        ...pluginOptions.deserialize,
      }),
    };
  };
}

export function deserializeElement(type: string, rules: GetNodeDeserializerRule[]): Deserialize {
  return function (editor: PlateEditor) {
    const pluginOptions = getPlatePluginOptions(editor, type);

    return {
      element: getElementDeserializer({
        type,
        rules,
        ...pluginOptions.deserialize,
      }),
    };
  };
}